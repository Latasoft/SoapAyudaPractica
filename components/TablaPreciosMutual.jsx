'use client';

import { useEffect, useState } from 'react';

const colores = ['text-[#1e5db2]', 'text-[#00b6e8]'];

export default function TablaPreciosMutual() {
    const [precios, setPrecios] = useState(null);
    const [vigencia, setVigencia] = useState('');

    useEffect(() => {
        // cache: no-store fuerza fetch fresco siempre, ignorando cualquier caché
        fetch('/precios.json?v=' + Date.now(), { cache: 'no-store' })
            .then((r) => r.json())
            .then((data) => {
                setPrecios(data.items);
                setVigencia(data.vigencia);
            });
    }, []);

    if (!precios) return null;

    const mitad = Math.ceil(precios.length / 2);
    const izq = precios.slice(0, mitad);
    const der = precios.slice(mitad);

    return (
        <>
            <h3 className="text-center m-8 font-bold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block">
                Lista de precios SOAP vehículos particulares (Vigencia desde {vigencia})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 my-10 text-center m-4 font-medium text-lg">
                <div className="text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                    {izq.map((item, i) => (
                        <p
                            key={item.label}
                            className={`grid grid-cols-2 ${colores[i % 2]} border-dotted border-t-2 ${i === izq.length - 1 ? 'md:border-y-2' : ''} border-black border-opacity-30`}
                        >
                            <span className="inline-block text-left">{item.label}</span>
                            <span className="inline-block text-right">{item.precio}</span>
                        </p>
                    ))}
                </div>
                <div className="text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                    {der.map((item, i) => (
                        <p
                            key={item.label}
                            className={`grid grid-cols-2 ${colores[(i + 1) % 2]} border-dotted ${i === der.length - 1 ? 'border-y-2' : 'border-t-2'} border-black border-opacity-30`}
                        >
                            <span className="inline-block text-left">{item.label}</span>
                            <span className="inline-block text-right">{item.precio}</span>
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}
