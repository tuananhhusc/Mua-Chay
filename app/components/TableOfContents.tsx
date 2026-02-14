'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
    id: string;
    title: string;
    level: number;
}

interface TableOfContentsProps {
    items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -80% 0px' }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="sticky top-8 w-full lg:w-80 h-fit max-h-[calc(100vh-4rem)] overflow-y-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-heading font-bold mb-6" style={{ color: 'var(--color-liturgical-purple)' }}>
                Mục Lục
            </h2>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={`toc-item ${activeId === item.id ? 'toc-item-active' : ''}`}
                        style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
                        onClick={() => handleClick(item.id)}
                    >
                        <span className="text-sm leading-relaxed">{item.title}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
