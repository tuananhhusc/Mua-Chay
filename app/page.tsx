import ReportHeader from './components/ReportHeader';
import TableOfContents from './components/TableOfContents';
import LayoutWrapper from './components/LayoutWrapper';
import ReportContent from './components/ReportContent';
import APAReferences from './components/APAReferences';
import MobileTableOfContents from './components/MobileTableOfContents';
import { getTOCItems, apaReferences } from '@/lib/reportData';

export default function Home() {
  const tocItems = getTOCItems();

  return (
    <>
      <ReportHeader />
      <LayoutWrapper
        toc={<TableOfContents items={tocItems} />}
        mobileToc={<MobileTableOfContents items={tocItems} />}
        content={
          <div className="academic-container">
            <ReportContent />
            <APAReferences references={apaReferences} />
          </div>
        }
      />
    </>
  );
}
