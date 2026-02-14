import { reportData } from '@/lib/reportData';
import Section from './Section';

export default function ReportContent() {
    return (
        <article className="prose prose-lg max-w-none">
            {reportData.map((section) => (
                <Section key={section.id} section={section} />
            ))}
        </article>
    );
}
