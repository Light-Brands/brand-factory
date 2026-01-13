import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password' | 'url';
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  label?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  label,
  error,
  className = '',
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${styles.input} ${error ? styles.error : ''}`}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

interface TextareaProps {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  label?: string;
  error?: string;
  rows?: number;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  value,
  onChange,
  required = false,
  label,
  error,
  rows = 4,
  className = '',
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`${styles.textarea} ${error ? styles.error : ''}`}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
