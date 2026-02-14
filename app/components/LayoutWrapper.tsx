'use client';

interface LayoutWrapperProps {
    toc: React.ReactNode;
    mobileToc?: React.ReactNode;
    content: React.ReactNode;
}

export default function LayoutWrapper({ toc, mobileToc, content }: LayoutWrapperProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <aside className="hidden lg:block">{toc}</aside>
            <main className="min-w-0">
                {content}
                {mobileToc}
            </main>
        </div>
    );
}
