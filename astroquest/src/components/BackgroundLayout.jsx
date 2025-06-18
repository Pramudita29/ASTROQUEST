export default function BackgroundLayout({ children }) {
    const positions = [
        [0, 0], [960, 0], [1920, 0],
        [0, 540], [960, 540], [1920, 540],
        [0, 1080], [960, 1080], [1920, 1080],
        [0, 1620], [960, 1620], [1920, 1620],
        [0, 2160], [960, 2160], [1920, 2160],
        [0, 2700], [960, 2700], [1920, 2700],
        [0, 3240], [960, 3240], [1920, 3240],
        [0, 3780], [960, 3780], [1920, 3780],
        [0, 4320], [960, 4320], [1920, 4320],
    ];

    return (
        <div className="w-full min-h-screen bg-black overflow-hidden relative">
            {/* Tiled Background Images */}
            {positions.map(([left, top], index) => (
                <img
                    key={index}
                    src="/image24.png"
                    alt={`Space bg ${index}`}
                    className="absolute w-[960px] h-[540px] object-cover"
                    style={{ left: `${left}px`, top: `${top}px` }}
                />
            ))}

            {/* Overlay for darkening effect */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

            {/* Main Content */}
            <div className="relative z-20 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col min-h-screen items-center justify-start text-white pt-[100px] pb-12">
                    {children}
                </div>
            </div>
        </div>
    );
}
