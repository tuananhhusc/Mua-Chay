'use client';

import React from 'react';
import { APAReference } from '@/lib/reportData';

interface APAReferencesProps {
    references: APAReference[];
}

const APAReferences: React.FC<APAReferencesProps> = ({ references }) => {
    // References are already sorted by ID in the source data, which matches the in-text citations.
    // We display them in this order so [1] in text corresponds to [1] here.

    return (
        <div className="apa-references-container mt-16 pt-8 border-t-2 border-[var(--color-liturgical-purple-light)]">
            <h2 className="text-2xl font-bold text-[var(--color-liturgical-purple)] mb-6 font-heading border-b pb-2">
                Tài liệu Tham khảo (Chuẩn APA 7th Edition)
            </h2>

            <div className="references-list space-y-4 font-body">
                {references.map((ref) => (
                    <div
                        key={ref.id}
                        id={`citation-${ref.id}`}
                        className="apa-reference pl-10 -indent-10 text-[0.95rem] leading-relaxed text-gray-800 hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                        <span className="font-bold text-[var(--color-liturgical-purple)] mr-2 inline-block w-8 text-right">
                            [{ref.id}]
                        </span>
                        <span className="font-semibold text-gray-900">{ref.author}.</span>{' '}
                        <span className="text-gray-600">({ref.year}).</span>{' '}
                        <span className="italic font-medium text-gray-800">{ref.title}.</span>{' '}
                        <span className="text-gray-600">Retrieved {ref.accessDate}, from </span>
                        <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-liturgical-purple)] hover:text-[var(--color-liturgical-gold-dark)] hover:underline break-all"
                        >
                            {ref.url}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default APAReferences;
