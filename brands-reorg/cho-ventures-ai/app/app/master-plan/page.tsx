import fs from 'fs';
import path from 'path';
import MasterPlanContent from './MasterPlanContent';

export default function MasterPlanPage() {
  const filePath = path.join(process.cwd(), '..', 'spec', 'master-plan.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  return <MasterPlanContent content={content} />;
}
