export default function PixelBracket() {
    return (
        <div className="flex flex-col gap-1 select-none mr-4 sm:mr-8" aria-hidden="true">
            {/* Parte superior del corchete */}
            <div className="flex gap-1">
                <div className="w-4 h-4 bg-buidlers-yellow"></div>
                <div className="w-4 h-4 bg-buidlers-yellow"></div>
            </div>
            <div className="flex gap-1 pl-4">
                <div className="w-4 h-4 bg-buidlers-yellow"></div>
            </div>

            {/* Centro (la punta del corchete) */}
            <div className="flex gap-1 pl-8">
                <div className="w-4 h-4 bg-buidlers-yellow"></div>
            </div>

            {/* Parte inferior (espejo) */}
            <div className="flex gap-1 pl-4">
                <div className="w-4 h-4 bg-buidlers-yellow"></div>
            </div>
            <div className="flex gap-1">
                <div className="w-4 h-4 bg-buidlers-yellow"></div>
                <div className="w-4 h-4 bg-buidlers-yellow"></div>
            </div>
        </div>
    );
}
