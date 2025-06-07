export default function BackgroundLayout({ children }) {
    return (
        <div className="w-full min-h-screen bg-black overflow-hidden flex justify-center">
            <div className="relative w-full  bg-black px-4 sm:px-6 lg:px-8">
                {/* Background Images */}
                <img
                    src="/image24.png"
                    alt="Space background 1"
                    className="absolute w-[939.89px] h-[528.69px] left-[40.05px] top-[6px] object-cover"
                />
                <img
                    src="/image24.png"
                    alt="Space background 2"
                    className="absolute w-[939.89px] h-[528.69px] left-[560.05px] top-[28.59px] object-cover"
                />
                <img
                    src="/image24.png"
                    alt="Space background 3"
                    className="absolute w-[939.89px] h-[528.69px] left-0 top-[472.72px] object-cover"
                />
                <img
                    src="/image24.png"
                    alt="Space background 4"
                    className="absolute w-[939.89px] h-[528.69px] left-[586.11px] top-[495.31px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

                {/* Content */}
                <div className="relative z-20 flex flex-col min-h-screen items-center justify-start text-white pt-[100px] pb-12">
                    {children}
                </div>
            </div>
        </div>
    );
}
