'use client';

import React from 'react';

interface InlineCitationProps {
    citationIds: number[];
}

const InlineCitation: React.FC<InlineCitationProps> = ({ citationIds }) => {
    const scrollToCitation = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        const element = document.getElementById(`citation-${id}`);
        if (element) {
            // Add highlight effect
            element.classList.add('bg-yellow-100', 'transition-colors', 'duration-500');

            element.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Remove highlight after animation
            setTimeout(() => {
                element.classList.remove('bg-yellow-100');
            }, 2000);
        }
    };

    return (
        <sup className="inline-citation ml-0.5 select-none print:text-black">
            <span className="text-[var(--color-liturgical-purple)] font-bold cursor-pointer hover:text-[var(--color-liturgical-gold-dark)] transition-colors">
                [
                {citationIds.map((id, index) => (
                    <span key={id}>
                        <a
                            href={`#citation-${id}`}
                            onClick={(e) => scrollToCitation(e, id)}
                            title="Nhấn để xem nguồn trích dẫn"
                            className="hover:underline"
                        >
                            {id}
                        </a>
                        {index < citationIds.length - 1 && <span>,</span>}
                    </span>
                ))}
                ]
            </span>
        </sup>
    );
};

export default InlineCitation;
