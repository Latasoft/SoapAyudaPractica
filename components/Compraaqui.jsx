"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Imágenes de ejemplo
import bcibanco from "public/bcibanco.png";
import mutualdeseguros from "public/mutualdeseguros.png";
import bomberosamaericanavalparariso from "public/bomberosamaericanavalparariso.jpg";
import cruzroja from "public/cruzroja.jpg";
import fundacionapoyandote from "public/fundacionapoyandote.jpg";
import dehermes from "public/dehermes.webp";
import soaplogo from "public/soaplogo.jpg";
const compraaqui = [
  {
    image: cruzroja,
    fundacion: "cr",
    info: "La Cruz Roja Chilena es una institución humanitaria y voluntaria que brinda apoyo en situaciones de emergencia y promueve la salud y el bienestar de la sociedad.",
  },
  {
    image: dehermes,
    fundacion: "dh",
    info: "DHERMES es un Refugio de Animales con 19 años resguardando a cientos de perritos abandonados y vulnerables que buscan hogar.",
  },
  {
    image: bomberosamaericanavalparariso,
    fundacion: "bav",
    info: "La Primera Compañía de Bomberos de Valparaiso fue fundada en 1851.Comenzó con 151 voluntarios, todos connotados porteños y en su mayoría ingleses y norteamericanos. En la actualidad están conformadas por más de 50 primerinos, quienes día a día permanecen atentos al ulular de la sirena para responder si el deber llama.",
  },
  {
    image: fundacionapoyandote,
    fundacion: "fa",
    info: "Fundación Apoyándote está conformada por padres con hijos en condición de Espectro Autista y fue creada con el objetivo de apoyar a las familias que no puedan costear los tratamientos que tanto cuesta pagar.",
  },
  {
    image: soaplogo,  
    fundacion: "xx",
    info: "informaciom de ejemplo a la espera de la información oficial",
  },
  
];

function Compraaqui() {
  // Modal (info)
  const [currentImage, setCurrentImage] = useState(null);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [infoContent, setInfoContent] = useState("");

  // Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1); // dinámico según ancho

  // 1) Detectar ancho de la pantalla
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      // Ajusta a tus breakpoints preferidos
      if (width < 640) {
        setItemsToShow(1);
      } else if (width < 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2) Tarjetas a mostrar
  const visibleItems = compraaqui.slice(currentSlide, currentSlide + itemsToShow);
  const maxIndex = compraaqui.length - itemsToShow;

  // 3) Navegación
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - itemsToShow, 0));
  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + itemsToShow, maxIndex));

  // 4) Modal
  const openInfoBox = (info, image) => {
    setCurrentImage(image);
    setInfoContent(info);
    setShowInfoBox(true);
  };
  const closeInfoBox = () => {
    setShowInfoBox(false);
    setCurrentImage(null);
  };

  // Evitar scroll de fondo cuando modal está abierto
  useEffect(() => {
    document.body.style.overflow = showInfoBox ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showInfoBox]);

  return (
    <>
      {/*
        CONTENEDOR PRINCIPAL
        - relative: para posicionar flechas absolute dentro
        - flex / items-center / justify-center: centrado horizontal
        - max-w-6xl + mx-auto: limita el ancho y lo centra en pantallas grandes
      */}
      <div className="relative w-full max-w-6xl mx-auto py-4 flex items-center justify-center">
        {/* Flecha Anterior */}
        <button
          onClick={prevSlide}
          disabled={currentSlide <= 0}
          className="
            absolute left-2 top-1/2 -translate-y-1/2 
            bg-[#22beeb] hover:bg-[#1e5db2] text-white 
            h-10 w-10 rounded-full 
            flex items-center justify-center
            shadow-md transition-all
            disabled:bg-gray-300 disabled:cursor-not-allowed
            z-10
          "
        >
          ‹
        </button>

        {/* Cards visibles */}
        <div className="flex gap-8 px-4">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className=" relative bg-white rounded-md overflow-hidden
        p-6 flex flex-col items-center "
              style={{
                minWidth: "280px",
                maxWidth: "320px",
                padding: "1.5rem",
                boxShadow: "inset 0 0.3rem 0.5rem 0 rgba(0,0,0,0.4)",
              }}
            >
              {/* Botón (i) */}
              <span
                onClick={() => openInfoBox(item.info, item.image)}
                className="
                  cursor-pointer font-serif font-black 
                  absolute bottom-1/4 right-3 
                  rounded-full h-9 w-9 
                  bg-[#22beeb] hover:bg-[#1e5db2]
                  border-2 border-solid border-[#22beeb] hover:border-none
                  text-white text-lg flex justify-center items-center
                  shadow-md shadow-[rgba(0,0,0,0.6)]
                  hover:shadow-[rgba(0,0,0,0.3)]
                  transition-all duration-300 ease-in-out
                "
              >
                i
              </span>

              {/* Imagen */}
              <img
                src={item.image.src}
                alt=""
                className="mx-auto my-2"
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />

              {/* Botones "Compra aquí" */}
              <div className="mt-8">
                {/* Mutual */}
                <p className="mb-4">
                  <img
                    src={mutualdeseguros.src}
                    alt=""
                    className="inline-block w-8 mr-2"
                  />
                  <Link
                    href={`/compraaquimut${item.fundacion}`}
                    className="
                      transition-all duration-300 ease-in-out 
                      shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.6)]
                      inline-block rounded-full px-5 py-2
                      bg-[linear-gradient(#22beeb,#1e5db2)]
                      text-white text-lg no-underline 
                    "
                  >
                    Compra aquí
                  </Link>
                </p>

                              {/* BCI - Inactivo temporalmente (pendiente banners por fundación) */}
                <p className="mb-4">
                  <img
                    src={bcibanco.src}
                    alt=""
                    className="inline-block w-8 mr-2 opacity-50"
                  />
                  <span
                    className="
                      inline-block rounded-full px-5 py-2
                      bg-gray-400
                      text-white text-lg
                      cursor-not-allowed
                      opacity-70
                    "
                  >
                    Compra aquí
                  </span>
                </p>

                {/* BCI
                <p>
                  <img
                    src={bcibanco.src}
                    alt=""
                    className="inline-block w-8 mr-2"
                  />
                  <Link
                    href={`/compraaquibci${item.fundacion}`}
                    className="
                      transition-all duration-300 ease-in-out 
                      shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.6)]
                      inline-block rounded-full px-5 py-2
                      bg-[linear-gradient(#22beeb,#1e5db2)]
                      text-white text-lg no-underline
                    "
                  >
                    Compra aquí
                  </Link>
                </p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Flecha Siguiente */}
        <button
  onClick={nextSlide}
  disabled={currentSlide >= maxIndex}
  className="
    absolute top-1/2 -translate-y-1/2
    right-2                 /* móvil */
    md:right-0              /* en pantallas medianas y grandes, pegada al borde derecho */
    bg-[#22beeb] hover:bg-[#1e5db2] text-white
    h-10 w-10 rounded-full
    flex items-center justify-center
    shadow-md transition-all
    disabled:bg-gray-300 disabled:cursor-not-allowed
    z-10
  "
>
  ›
</button>


      </div>

      {/* MODAL */}
      {showInfoBox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-50 backdrop-blur-md flex items-center justify-center"
        >
          <div className="relative max-w-2xl w-full mx-auto px-8">
            <div
              id="infoblock"
              className="
                overflow-auto block bg-white 
                p-6 sm:p-8 md:p-16 
                rounded-xl 
                shadow-lg shadow-[rgba(0,0,0,0.4)] 
                z-50
              "
            >
              <p className="text-center">
                <img
                  src={currentImage?.src}
                  alt=""
                  className="mx-auto w-[144px]"
                />
              </p>
              <p className="mt-8 md:text-xl sm:text-lg text-base text-black font-medium text-justify hyphens-auto text-opacity-60 indent-5 leading-7 sm:leading-8 md:leading-9">
                {infoContent}
              </p>
              <p
                className="
                  mt-12 uppercase text-base md:text-md 
                  text-[#22beeb] hover:text-[#1e5db2] 
                  font-bold text-center cursor-pointer
                  transition-all ease-in-out duration-300
                "
                onClick={closeInfoBox}
              >
                Cerrar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Compraaqui;
