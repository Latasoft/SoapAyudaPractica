
import Link from 'next/link';
import Compraaqui from '../components/Compraaqui.jsx';
import corazon from '../public/corazon.png';
import CarruselImages from '../components/carrusel.jsx';

export default function Page() {

    return (
        <main className="text-center ">

            <section className={`z-10 max-w-screen-xl mx-auto rounded-none xl:rounded-xl relative h-[453px] sm:h-[453px] md:h-[610px] lg:h-[610px] overflow-hidden `}>

                <div className={` bg-[url('/auto.jpg')] bg-center bg-cover  absolute w-full overflow-hidden h-full `} />
                <div className={` absolute left-0 bottom-0 h-20 w-full bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent`} />
                <div className={` absolute left-0 top-0 h-20 w-full bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent`} />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 max-w-6xl w-full h-full flex flex-col items-start justify-center text-left mx-auto">
                <div className="relative block text-center px-8 text-white transition-all duration-300 ease-in-out max-w-xl">
                    <h2 data-aos-once="true" data-aos="flip-right">
                        <Link
                            style={{ lineHeight: `1.3em` }}
                            href="./#compraaqui"
                            className="mx-auto mb-4 md:mb-6 w-70 md:w-90 lg:w-[30rem] transition-all duration-300 ease-in-out text-opacity-90 hover:text-yellow-200 shadow-lg shadow-[rgba(0,0,0,0.3)] hover:shadow-[rgba(0,0,0,0.5)] inline-block rounded-full px-10 pt-6 pb-6 bg-[linear-gradient(#22beeb,#1e5db2)] text-white text-2xl md:text-3xl no-underline font-bold hover:translate-y-[-5px] hover:bg-[linear-gradient(#1e5db2,#22beeb)]"
                        >
                            Dona comprando tu SOAP Aquí
                        </Link>
                    </h2>
                    {/* Agregar ícono de mano */}
                    <div className="mt-4 animate-bounce">
                        <img
                            src=".\hand-up-svgrepo-com.svg" // Cambiar por la ruta de tu imagen/ícono
                            alt="Hand pointing up"
                            className="mx-auto w-20"
                            
                        />
                    </div>
                </div>


</div>

            </section>

            <section className="text-center max-w-screen-lg mx-auto">
                <h2 id="quienesomos" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-20 md:mt-28 mb-10 md:mb-16">¿Quiénes somos?</h2>
                <div className={` text-justify tracking-normal indent-6 hyphens-auto text-xl md:text-2xl font-medium text-opacity-60 text-black leading-8 md:leading-9 font-sans`}>
                    <p className={`mx-6 mb-7 `} ><span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> nace bajo el concepto de ayudar a diversas instituciones y/o fundaciones que mediante la venta del Seguro Obligatorio puedan recibir donaciones con el objetivo de continuar con sus labores sociales.</p>
                    <p data-aos-once="true" data-aos="fade-up" className={`mx-6 mb-7 `} ><span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> proviene de una red de venta que trabaja para prestar el mejor servicio hace más de 20 años con casa matriz en la ciudad de Valparaíso.</p>
                    <p data-aos-once="true" data-aos="fade-up" className={`mx-6 mb-7 `} ><span className="text-[#1e5db2] font-bold">Nuestra VISIÓN es</span> <span className="text-[#22beeb] font-bold">AYUDAR</span> a más instituciónes y/o Fundaciones mediante la venta online del Seguro Obligatorio <span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span>.</p>
                </div>
                <p data-aos-once="true" data-aos="fade-up" className="tracking-tight text-3xl md:text-5xl font-serif font-extrabold italic mt-16 mr-20 ml-20"><span className="text-[#1e5db2]">Súmate </span><span className="text-[#22beeb]">a esta gran labor</span></p>
                <p data-aos-once="true" data-aos="fade-up" className="mt-14 md:mt-30 mb-8 sm:mb-10 md:mb-16 "><img src={corazon.src} alt="" className="inline-block mr-2 w-40 sm:w-40 md:w-48 lg:w-52" /></p>
                <h2 data-aos-once="true" data-aos="fade-up" id="ayudasocial" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-20 mb-10 md:mb-16">Ayuda Social</h2>
                <p data-aos-once="true" data-aos="fade-up" className=" text-justify indent-6 hyphens-auto text-xl md:text-2xl font-medium text-opacity-60 text-black mx-7 mt-7 leading-8 md:leading-9">Actualmente, <span className="text-[#1e5db2] font-bold">SOAP</span> <span className="text-[#22beeb] font-bold">AYUDA</span> está presente con convenios en diferentes Instituciones y/o Fundaciones de <span className="text-[#22beeb] font-bold">ámbito social</span>.</p>
            </section>

            <section
                id="compraaqui"
                className="
                relative
                mt-8 md:mt-12 mb-10 md:mb-16
                bg-gradientA px-8 lg:px-4
                py-10 max-w-screen-xl mx-auto
                rounded-none xl:rounded-xl
                "
            >
                <Compraaqui />
            </section>

            
            <section className="text-center max-w-screen-md w-full mx-auto">
                <h2 data-aos-once="true" data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#22beeb] mt-16 md:mt-28 mb-10 md:mb-16">¿Cómo funciona?</h2>
                <ol className={` list-decimal list-outside text-left text-2xl md:text-3xl font-semibold ml-8 `}>
                    <li data-aos-once="true" data-aos="fade-up" className={` text-[#1754a3] m-7 `}>Haga click en el botón de compra de su elección</li>
                    <li data-aos-once="true" data-aos="fade-up" className={` text-[#11b8e7] m-7 `} >Complete el Formulario</li>
                    <li data-aos-once="true" data-aos="fade-up" className={` text-[#1754a3] m-7 `} >Seleccione forma de pago</li>
                    <li data-aos-once="true" data-aos="fade-up" className={` text-[#11b8e7] m-7 `} >Hecho el pago ya has donado a la institución elegida</li>
                </ol>
            </section>

            <section className="text-center max-w-screen-xl mx-auto relative">
                <p data-aos-once="true" data-aos="fade-up" className="mt-14 md:mt-30 mb-8 sm:mb-10 md:mb-16 "><img src={corazon.src} alt="" className="inline-block mr-2 w-40 sm:w-40 md:w-48 lg:w-52" /></p>
                <h2 data-aos-once="true" data-aos="fade-up" id="tuaporte" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-10 md:mb-16">Tu aporte SOAP</h2>
                <CarruselImages />
            </section>

            <section className="text-center max-w-screen-md mx-auto mb-0 sm:mb-0 md:mb-40">
                <h2 data-aos-once="true" data-aos="fade-up" id="contacto" className="scroll-m-header text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-10 md:mb-16">Contacto</h2>
                
                <div data-aos-once="true" data-aos="fade-down" className="pt-4 pr-4 pb-10 pl-4  bg-gradientA rounded-none sm:rounded-none md:rounded-xl lg:rounded-xl relative overflow-hidden">
                    

                    <form className={` relative `} action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="2211d83c-52ec-4484-a609-6fd57c3c47f1" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="nombre">Nombre</label>
                        <input className=" rounded-md p-2 font-medium ext-lg w-[100%] mt-2" type="text" name="nombre" required="" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="email">Correo electrónico</label>
                        <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="email" name="email" required="" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="numero">Teléfono</label>
                        <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="number" name="numero" required="" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="">Mótivo de la consulta</label>
                        <select className=" rounded-md p-2 font-medium text-base md:text-lg w-[100%] mt-2 appearance-none  bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==)] bg-no-repeat bg-right" name="motivos" id="motivos" required="">
                            <option value="selecciona">Selecciona un motivo</option>
                            <option value="opiniones">Opiniones</option>
                            <option value="agradecimientos">Agradecimientos</option>
                            <option value="representacion">Representación ONG</option>
                            <option value="consultas">Consultas</option>
                        </select>

                        <label className=" font-medium text-lg block mt-8" htmlFor="asunto">Asunto</label>
                        <input className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" type="text" id="asunto" name="Asunto" required="" />

                        <label className=" font-medium text-lg block mt-8" htmlFor="mensaje">Mensaje</label>
                        <textarea className=" rounded-md p-2 font-medium text-lg w-[100%] mt-2" name="mensaje" id="mensaje" rows="3" required=""></textarea>

                        <input className=" rounded-md py-2 px-8 font-bold text-lg mt-8 bg-[#1e5db2] text-white text-opacity-70 hover:text-opacity-100 cursor-pointer shadow-xl shadow-[rgba(0,0,0,0.3)] hover:shadow-lg hover:shadow-[rgba(0,0,0,0.5)] transition-all easy-in-out duration-300" type="submit" value="Enviar" />
                    </form>
                </div>
            </section>

        </main>
    );
}

