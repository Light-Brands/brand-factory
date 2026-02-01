#!/usr/bin/env python3
"""
Script to fill in W-8BEN-E PDF form for 15801851 Canada Inc.

Usage:
    python3 fill_w8bene.py

Output:
    W-8BEN-E-FILLED-15801851-Canada-Inc.pdf
"""

import subprocess
import sys

# Ensure pypdf is installed
try:
    from pypdf import PdfReader, PdfWriter
    from pypdf.constants import AnnotationDictionaryAttributes
except ImportError:
    print("Installing pypdf...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    from pypdf import PdfReader, PdfWriter
    from pypdf.constants import AnnotationDictionaryAttributes

from pathlib import Path
from pypdf.generic import NameObject, BooleanObject

# ============================================================================
# COMPANY INFORMATION - Edit these values as needed
# ============================================================================

COMPANY_INFO = {
    # Part I - Identification (Lines 1-2)
    "name": "15801851 Canada Inc.",
    "country_of_incorporation": "Canada",

    # Part I - Address (Line 6)
    "address_street": "200-440 Laurier Ave W",
    "address_city_state_zip": "Ottawa, Ontario K1R 7X6",
    "address_country": "Canada",

    # Part I continued - Page 2 (Lines 8-10)
    "us_tin": "",  # Leave blank - not required
    "giin": "",  # Leave blank for Active NFFE
    "foreign_tin": "1580185-1",  # Canadian corporation number

    # Part III - Treaty Benefits (Lines 14-15)
    "treaty_country": "Canada",
    "treaty_article": "VII",
    "treaty_paragraph": "1",
    "treaty_rate": "0",
    "treaty_income_type": "Business Profits",
    "treaty_conditions": "The corporation does not have a permanent establishment in the United States",

    # Part XXX - Certification (Page 8)
    "signer_name": "Nicholas Courschesne",
    "sign_date": "01-28-2026",
}

# ============================================================================
# PDF FIELD MAPPING - Based on actual W-8BEN-E (Rev. October 2021) fields
# ============================================================================

def get_text_field_mapping(info: dict) -> dict:
    """Map company info to PDF text field names."""
    return {
        # Page 1 - Part I: Identification
        "topmostSubform[0].Page1[0].f1_1[0]": info["name"],  # Line 1: Organization name
        "topmostSubform[0].Page1[0].f1_2[0]": info["country_of_incorporation"],  # Line 2: Country
        # f1_3[0] = Line 3: Disregarded entity (leave blank)
        "topmostSubform[0].Page1[0].f1_4[0]": info["address_street"],  # Line 6: Street address
        "topmostSubform[0].Page1[0].f1_5[0]": info["address_city_state_zip"],  # Line 6: City, state, zip
        "topmostSubform[0].Page1[0].f1_6[0]": info["address_country"],  # Line 6: Country
        # f1_7, f1_8, f1_9 = Line 7: Mailing address (leave blank if same)

        # Page 2 - Part I continued
        "topmostSubform[0].Page2[0].f2_1[0]": info["us_tin"],  # Line 8: US TIN
        "topmostSubform[0].Page2[0].Line9a_ReadOrder[0].f2_2[0]": info["giin"],  # Line 9a: GIIN
        "topmostSubform[0].Page2[0].Line9b_ReadOrder[0].f2_3[0]": info["foreign_tin"],  # Line 9b: Foreign TIN
        # f2_4[0] = Line 10: Reference numbers (optional)

        # Page 2 - Part III: Treaty Benefits
        "topmostSubform[0].Page2[0].f2_9[0]": info["treaty_country"],  # Line 14a: Treaty country
        "topmostSubform[0].Page2[0].f2_11[0]": info["treaty_article"],  # Line 15: Article
        "topmostSubform[0].Page2[0].f2_12[0]": info["treaty_paragraph"],  # Line 15: Paragraph
        "topmostSubform[0].Page2[0].f2_13[0]": info["treaty_rate"],  # Line 15: Rate %
        "topmostSubform[0].Page2[0].f2_14[0]": info["treaty_income_type"],  # Line 15: Type of income
        "topmostSubform[0].Page2[0].f2_15[0]": info["treaty_conditions"],  # Line 15: Explain conditions

        # Page 8 - Part XXX: Certification
        "topmostSubform[0].Page8[0].f8_31[0]": info["signer_name"],  # Print name
        "topmostSubform[0].Page8[0].f8_32[0]": info["sign_date"],  # Date (MM-DD-YYYY)
    }


def get_checkbox_mapping() -> dict:
    """
    Map checkbox fields to their 'checked' values.

    Checkbox fields in this PDF use /Yes or /1 for checked state.
    The field names and their meanings:

    Page 1 - Line 4 (Chapter 3 Status):
        c1_1[0] = Corporation (first checkbox)
        c1_1[1] = Partnership
        c1_1[2] = Simple trust
        ... etc

    Page 1 - Line 5 (Chapter 4/FATCA Status):
        Col1 and Col2 contain the FATCA status checkboxes
        Active NFFE is typically in Col2

    Page 7 - Line 39 (Part XXV - Active NFFE):
        c7_5[0] = Active NFFE certification checkbox

    Page 2 - Part III Treaty:
        c2_5[0] = Line 14a checkbox (treaty resident)
        c2_5[1-5] = Line 14b LOB checkboxes
    """
    return {
        # Line 4: Chapter 3 Status = Corporation
        "topmostSubform[0].Page1[0].c1_1[0]": "/Yes",  # Corporation checkbox

        # Line 4: Hybrid entity = No
        "topmostSubform[0].Page1[0].c1_2[1]": "/Yes",  # "No" checkbox for hybrid

        # Line 5: Chapter 4 Status = Active NFFE
        # Active NFFE is checkbox index 24 in the FATCA section (Col2, index 6)
        "topmostSubform[0].Page1[0].Col2[0].c1_3[6]": "/Yes",  # Active NFFE

        # Part III - Line 14a: Treaty resident checkbox
        "topmostSubform[0].Page2[0].c2_5[0]": "/Yes",  # Line 14a - beneficial owner is resident

        # Part III - Line 14b: LOB = Company meets ownership and base erosion test
        # This is checkbox index 5 in the LOB section
        "topmostSubform[0].Page2[0].CheckboxesLine14b_ReadOrder[0].c2_5[4]": "/Yes",

        # Part XXV - Line 39: Active NFFE certification
        "topmostSubform[0].Page7[0].c7_5[0]": "/Yes",  # Active NFFE cert checkbox
    }


def fill_pdf_form(input_path: str, output_path: str, text_fields: dict, checkboxes: dict) -> bool:
    """
    Fill PDF form with text values and check specified checkboxes.
    """
    try:
        reader = PdfReader(input_path)
        writer = PdfWriter()

        # Clone the PDF
        writer.clone_document_from_reader(reader)

        # Get all fields from the PDF
        all_fields = reader.get_fields() or {}

        # Combine text fields and checkboxes
        all_updates = {}

        # Add text fields
        for field_name, value in text_fields.items():
            if value and field_name in all_fields:
                all_updates[field_name] = value

        # Add checkbox fields
        for field_name, value in checkboxes.items():
            if field_name in all_fields:
                all_updates[field_name] = value

        # Update all pages with the field values
        for page_num, page in enumerate(writer.pages):
            writer.update_page_form_field_values(page, all_updates)

        # Write the output
        with open(output_path, 'wb') as output_file:
            writer.write(output_file)

        return True

    except Exception as e:
        print(f"Error filling PDF: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    script_dir = Path(__file__).parent
    input_pdf = script_dir / "fw8bene.pdf"
    output_pdf = script_dir / "W-8BEN-E-FILLED-15801851-Canada-Inc.pdf"

    print("=" * 70)
    print("W-8BEN-E PDF Form Filler")
    print("For: 15801851 Canada Inc.")
    print("=" * 70)

    if not input_pdf.exists():
        print(f"\nERROR: Input PDF not found at:\n  {input_pdf}")
        return 1

    # Get field mappings
    text_fields = get_text_field_mapping(COMPANY_INFO)
    checkboxes = get_checkbox_mapping()

    print("\nFilling form with the following values:")
    print("-" * 50)
    print(f"  Organization Name:  {COMPANY_INFO['name']}")
    print(f"  Country:            {COMPANY_INFO['country_of_incorporation']}")
    print(f"  Address:            {COMPANY_INFO['address_street']}")
    print(f"                      {COMPANY_INFO['address_city_state_zip']}")
    print(f"                      {COMPANY_INFO['address_country']}")
    print(f"  Foreign TIN:        {COMPANY_INFO['foreign_tin']}")
    print(f"  Treaty Country:     {COMPANY_INFO['treaty_country']}")
    print(f"  Treaty Article:     {COMPANY_INFO['treaty_article']}, Para {COMPANY_INFO['treaty_paragraph']}")
    print(f"  Withholding Rate:   {COMPANY_INFO['treaty_rate']}%")
    print(f"  Income Type:        {COMPANY_INFO['treaty_income_type']}")
    print(f"  Signer:             {COMPANY_INFO['signer_name']}")
    print(f"  Date:               {COMPANY_INFO['sign_date']}")
    print("-" * 50)

    print("\nCheckboxes to be marked:")
    print("  [X] Line 4: Corporation")
    print("  [X] Line 4: Hybrid entity - No")
    print("  [X] Line 5: Active NFFE (FATCA status)")
    print("  [X] Line 14a: Treaty resident of Canada")
    print("  [X] Line 14b: Company meets ownership and base erosion test")
    print("  [X] Line 39: Active NFFE certification (Part XXV)")
    print("-" * 50)

    # Fill the PDF
    print("\nGenerating filled PDF...")
    success = fill_pdf_form(str(input_pdf), str(output_pdf), text_fields, checkboxes)

    if success:
        print(f"\n{'=' * 70}")
        print("SUCCESS!")
        print(f"{'=' * 70}")
        print(f"\nFilled PDF saved to:\n  {output_pdf}")
        print("\n" + "=" * 70)
        print("IMPORTANT - Please review the PDF and verify:")
        print("=" * 70)
        print("""
  1. All text fields are filled correctly
  2. All checkboxes are properly marked:
     - Page 1, Line 4: "Corporation" is checked
     - Page 1, Line 5: "Active NFFE" is checked
     - Page 2, Line 14a: Treaty resident checkbox is checked
     - Page 2, Line 14b: "Company that meets ownership..." is checked
     - Page 7, Line 39: Active NFFE certification is checked

  3. SIGN the form manually on Page 8 (signature field)

  4. If any checkboxes didn't fill correctly, you may need to check them
     manually in a PDF editor (Preview on Mac, Adobe Reader, etc.)
""")
    else:
        print("\nFailed to fill PDF. See error above.")
        return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
