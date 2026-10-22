import Image from 'next/image';
import soapayuda from 'public/soapayuda .png';

const Footer = () => {
    return (
        <footer className=" bg-[linear-gradient(180deg,#254983,#1A385D,#0E2032)] mx-auto max-w-screen-lg rounded-none lg:rounded-xl overflow-hidden">
            
            <div className={` relative py-6 w-full flex flex-col md:flex-row md:justify-evenly items-center gap-6 md:gap-0 text-lg text-white text-opacity-80 text-center `}>

                <section className="relative px-3">
                    <h3 className="w-full h-16 relative ">
                        <Image src={soapayuda} className={` mx-auto object-contain  h-full w-auto `} alt="" height='auto' width="auto" />
                    </h3>
                    <div className="w-full">
                        <p className="font-semibold mt-2">© 2022 SOAP AYUDA.</p>
                        <p className="font-normal">Creado por <span className={` text-nowrap`}>Seguro Obligatorio</span></p>
                    </div>
                </section>

                <section className="relative px-3 ">
                    <p className="h-auto md:h-16 flex justify-center items-center">
                        <a href="https://www.instagram.com/soapayuda/" className="text-white hover:text-sky-400 transition-all duration-300 ease-in-out mx-4 text-opacity-80 hover:text-opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-10">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61560308939038" className="text-white hover:text-sky-400 transition-all duration-300 ease-in-out mx-4 text-opacity-80 hover:text-opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="h-8">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </a>
                    </p>
                    <address className=" not-italic mt-2">
                    <p className=" font-normal w-full"><span className={` text-nowrap `}><a href="tel:+56322233491">Teléfono (32) 2233 491</a>.</span> <span className={` text-nowrap `}>Av. Colón 3192. Valparaíso</span></p>
                        <p className=" font-normal w-full"><span className={` text-nowrap `}>Lunes a viernes de</span> <span className={` text-nowrap `}>8:30 hrs. a 14:00 hrs.</span></p>
                        
                    </address>
                </section>

            </div>
        </footer>
    );
};

export default Footer;