import React from 'react';

export default function CardFrame({ children, index }: { children: React.ReactNode, index: string }) {
    return (
        <div className="relative border border-gray-800 bg-black/50 p-6 hover:border-buidlers-yellow transition-colors group h-full">
            {/* El número pequeño en la esquina */}
            <div className="absolute top-0 left-0 p-2 text-[10px] font-mono text-gray-600 group-hover:text-buidlers-yellow">
                ID_{index}
            </div>

            {/* Esquinas decorativas */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600 group-hover:border-buidlers-yellow"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-600 group-hover:border-buidlers-yellow"></div>

            {children}
        </div>
    )
}
