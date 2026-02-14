'use client';

import { useState, useEffect } from 'react';
import { TOCItem } from '@/lib/reportData';

interface MobileTableOfContentsProps {
    items: TOCItem[];
}

export default function MobileTableOfContents({ items }: MobileTableOfContentsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('');

    // Sync active state with scroll (same logic as desktop TOC)
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
            setIsOpen(false); // Close drawer after selection
        }
    };

    return (
        <div className="lg:hidden">
            {/* Floating Action Button Trigger */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-[var(--color-liturgical-purple)] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-[var(--color-liturgical-purple-dark)] transition-transform active:scale-95 border-2 border-[var(--color-liturgical-gold)] animate-fade-in-up"
                aria-label="Mở mục lục"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </button>

            {/* Backdrop & Drawer */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Drawer Panel */}
                    <div className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[85vh] flex flex-col animate-slide-up sm:m-4">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[var(--background)] rounded-t-2xl">
                            <h2 className="text-lg font-bold text-[var(--color-liturgical-purple)] flex items-center gap-2">
                                <span>📖</span> Mục Lục Nghiên Cứu
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* List Content */}
                        <div className="overflow-y-auto p-4 space-y-1">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleClick(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 border-l-4 ${activeId === item.id
                                            ? 'bg-purple-50 border-[var(--color-liturgical-purple)] font-semibold text-[var(--color-liturgical-purple-dark)] shadow-sm'
                                            : 'border-transparent text-gray-700 hover:bg-gray-50'
                                        }`}
                                    style={{
                                        paddingLeft: `${(item.level === 1 ? 1 : item.level * 1.5)}rem`
                                    }}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
