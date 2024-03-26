'use client'
import React, { useEffect, useState } from 'react';

const Results = ({data}) => {
    const [showResults, setShowResults] = useState(false);

    // Mostrar resultados con una animación después de un pequeño retraso
    useEffect(() => {
        setTimeout(() => {
            setShowResults(true);
        }, 300);
    }, []);

    return (
        <div className={`mt-8 lg:mt-16  lg:w-[80%] flex flex-col gap-2 text-center text-lg py-5 px-[40px] mx-auto  rounded-xl h-full ${showResults ? 'opacity-100 transform translate-y-0 transition-all duration-500 bg-gray-900' : 'opacity-0 transform -translate-y-4 bg-gray-900'}`}>
            <p className='mt-2 text-white text-xl lg:text-[30px] font-bold'>Resultado del análisis:</p>
            <div className='flex flex-col gap-2 lg:gap4 mt-2 lg:mt-5 lg:text-[22px] text-zinc-400'>
                <p className='lg:text-[22px]'>Máximo: {data.max()}</p>
                <p>Mínimo: {data.min()}</p>
                <p>Repeticiones:</p>
                <ul>
                    {Array.from(data.getRepeticiones()).map(([letra, repeticiones]) => (
                        <li key={letra}>{letra}: {repeticiones}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}

export default Results;