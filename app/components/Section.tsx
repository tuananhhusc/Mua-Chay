import { Section as SectionType } from '@/lib/reportData';
import TableComponent from './TableComponent';
import InlineCitation from './InlineCitation';
import React from 'react';

interface SectionProps {
    section: SectionType;
}

export default function Section({ section }: SectionProps) {
    const HeadingTag = `h${section.level}` as keyof React.JSX.IntrinsicElements;

    const headingClasses = {
        1: 'text-3xl md:text-4xl font-bold mb-4 mt-8 text-[var(--color-liturgical-purple)] print:text-black',
        2: 'text-2xl md:text-3xl font-bold mb-3 mt-6 text-[var(--color-liturgical-purple-dark)] print:text-black',
        3: 'text-xl md:text-2xl font-semibold mb-3 mt-5 text-[var(--color-liturgical-purple-dark)] print:text-black',
        4: 'text-lg md:text-xl font-semibold mb-2 mt-4 text-gray-800 print:text-black',
    }[section.level];

    // Helper to parse content and replace [1], [1,2] with InlineCitation
    const parseContent = (text: string) => {
        const parts = text.split(/(\[[\d,\s]+\])/g);
        return parts.map((part, index) => {
            const match = part.match(/^\[([\d,\s]+)\]$/);
            if (match) {
                const ids = match[1].split(',').map(s => parseInt(s.trim()));
                return <InlineCitation key={index} citationIds={ids} />;
            }
            return <React.Fragment key={index}>{part}</React.Fragment>;
        });
    };

    return (
        <section id={section.id} className="mb-12 scroll-mt-24">
            <HeadingTag className={`section-heading ${headingClasses}`}>
                {section.title}
            </HeadingTag>

            {section.content.map((paragraph, idx) => (
                <p key={idx} className="paragraph-academic mb-4 text-justify leading-relaxed">
                    {parseContent(paragraph)}
                </p>
            ))}

            {section.table && <TableComponent data={section.table} />}

            {section.subsections && section.subsections.map((subsection) => (
                <Section key={subsection.id} section={subsection} />
            ))}
        </section>
    );
}
