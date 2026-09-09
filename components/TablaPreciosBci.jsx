'use client';

import { useEffect, useState } from 'react';

const colores = ['text-[#1e5db2]', 'text-[#00b6e8]'];

export default function TablaPreciosBci() {
const [precios, setPrecios] = useState(null);

useEffect(() => {
    fetch('/preciosBci.json?v=' + Date.now(), { cache: 'no-store' })
        .then((r) => r.json())
        .then((data) => {
            setPrecios(data[0].seguros[0].precios);
        });
}, []);

if (!precios) return null;

const mitad = Math.ceil(precios.length / 2);
const izq = precios.slice(0, mitad);
const der = precios.slice(mitad);

const formatoPrecio = (precio) =>
    '$' + precio.toLocaleString('es-CL');

return (
    <>
        <h3 className="text-center m-8 font-bold text-lg md:text-xl lg:text-1xl text-[#1e5db2] duration-300 ease-in-out block">
            Lista de precios SOAP BCI (Vigencia desde 01/09/2026)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 my-10 text-center m-4 font-medium text-lg">

            <div className="text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                {izq.map((item, i) => (
                    <p
                        key={item.vehiculoTipo}
                        className={`grid grid-cols-2 ${colores[i % 2]} border-dotted border-t-2 ${i === izq.length - 1 ? 'md:border-y-2' : ''} border-black border-opacity-30`}
                    >
                        <span className="inline-block text-left">
                            {item.vehiculoTipo}
                        </span>

                        <span className="inline-block text-right">
                            {formatoPrecio(item.precio)}
                        </span>
                    </p>
                ))}
            </div>

            <div className="text-left mx-8 text-lg md:text-xl duration-300 ease-in-out block">
                {der.map((item, i) => (
                    <p
                        key={item.vehiculoTipo}
                        className={`grid grid-cols-2 ${colores[(i + 1) % 2]} border-dotted ${i === der.length - 1 ? 'border-y-2' : 'border-t-2'} border-black border-opacity-30`}
                    >
                        <span className="inline-block text-left">
                            {item.vehiculoTipo}
                        </span>

                        <span className="inline-block text-right">
                            {formatoPrecio(item.precio)}
                        </span>
                    </p>
                ))}
            </div>

        </div>
    </>
);

}
