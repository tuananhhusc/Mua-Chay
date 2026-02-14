export default function ReportHeader() {
    return (
        <header className="w-full bg-[var(--color-liturgical-purple)] text-white py-10 px-4 border-b-8 border-[var(--color-liturgical-gold)] shadow-2xl relative overflow-hidden">
            {/* Background decorative element (Radial Gradient for depth) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-liturgical-purple-light)_0%,_var(--color-liturgical-purple)_70%)] opacity-40 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">

                {/* Decorative Line - Top - Scaled down */}
                <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
                    <div className="h-[1px] w-12 bg-[var(--color-liturgical-gold-light)]"></div>
                    <div className="w-2.5 h-2.5 rotate-45 border-2 border-[var(--color-liturgical-gold-light)] bg-transparent"></div>
                    <div className="h-[1px] w-12 bg-[var(--color-liturgical-gold-light)]"></div>
                </div>

                {/* Main Title - Compacted but still grand - With Shimmer Effect */}
                <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 leading-none tracking-tight drop-shadow-2xl select-none">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#b8860b] animate-text-shimmer">
                        MÙA CHAY
                    </span>
                </h1>

                {/* Subtitle - More concise spacing */}
                <div className="max-w-3xl mx-auto py-4 backdrop-blur-sm bg-white/5 rounded-xl px-6 border border-white/10 shadow-lg mb-6">
                    <p className="text-lg md:text-2xl text-white font-heading font-light italic leading-relaxed">
                        "Động Năng Tâm Linh Và Thực Hành Trong Giáo Hội Công Giáo"
                    </p>
                </div>

                {/* Decorative Line - Bottom (Mirrored) - Scaled down */}
                <div className="flex items-center justify-center gap-4 opacity-80">
                    <div className="h-[1px] w-12 bg-[var(--color-liturgical-gold-light)]"></div>
                    <div className="w-2.5 h-2.5 rotate-45 border-2 border-[var(--color-liturgical-gold-light)] bg-transparent"></div>
                    <div className="h-[1px] w-12 bg-[var(--color-liturgical-gold-light)]"></div>
                </div>
            </div>
        </header>
    );
}
