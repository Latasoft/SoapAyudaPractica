export const metadata = {
    title: 'Seguros Generales'
};

const inputClass = 'rounded-md p-2 font-medium text-lg w-full mt-2';
const labelClass = 'font-medium text-lg block mt-8';

export default function Page() {
    return (
        <main className="text-center">
            <section className="text-center max-w-screen-md mx-auto mb-0 md:mb-40">
                <h1 data-aos-once="true" data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-6">Seguros Generales</h1>
                <p data-aos-once="true" data-aos="fade-up" className="text-lg md:text-xl font-medium text-black text-opacity-60 mx-6 mb-10 md:mb-16">Completa el formulario y te contactaremos con una cotización.</p>

                <div data-aos-once="true" data-aos="fade-down" className="pt-4 pr-4 pb-10 pl-4 bg-gradientA rounded-none md:rounded-xl relative overflow-hidden text-left">
                    <form className="relative" acceptCharset="utf-8" action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="2fa94fbc-a421-4b38-8b72-1d16f6e2554c" />
                        <input type="hidden" name="subject" value="Nueva solicitud - Seguros Generales (SOAP Ayuda)" />
                        <input type="hidden" name="sitio" value="soapayuda.cl" />
                        <input type="hidden" name="redirect" value="https://soapayuda.cl/segurosgenerales" />

                        <label className={labelClass} htmlFor="consultaTipo">Tipo de seguro</label>
                        <select className={`${inputClass} appearance-none bg-white bg-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiNiYmIiPjxwYXRoIGQ9Ik02IDlsNiA2IDYtNiIvPjwvc3ZnPg==)] bg-no-repeat bg-right`} id="consultaTipo" name="consultaTipo" required defaultValue="">
                            <option value="" disabled>Seleccione...</option>
                            <option value="Vehículos">Vehículos</option>
                            <option value="Vida">Vida</option>
                            <option value="Otros">Otros</option>
                        </select>

                        <h2 className="text-2xl font-bold text-white text-center mt-12">Datos del asegurado</h2>
                        <p className="text-white text-center">(Debe corresponder al dueño del vehículo)</p>

                        <label className={labelClass} htmlFor="rut">RUT</label>
                        <input className={inputClass} type="text" id="rut" name="rut" required />

                        <label className={labelClass} htmlFor="nombre">Nombre</label>
                        <input className={inputClass} type="text" id="nombre" name="nombre" required />

                        <label className={labelClass} htmlFor="patapellido">Apellido paterno</label>
                        <input className={inputClass} type="text" id="patapellido" name="patapellido" required />

                        <label className={labelClass} htmlFor="matapellido">Apellido materno</label>
                        <input className={inputClass} type="text" id="matapellido" name="matapellido" required />

                        <label className={labelClass} htmlFor="correo">Correo electrónico</label>
                        <input className={inputClass} type="email" id="correo" name="correo" required />

                        <h2 className="text-2xl font-bold text-white text-center mt-12">Datos del vehículo</h2>

                        <label className={labelClass} htmlFor="vehiculotipo">Tipo de vehículo</label>
                        <input className={inputClass} type="text" id="vehiculotipo" name="vehiculotipo" required />

                        <label className={labelClass} htmlFor="vehiculopatente">Patente</label>
                        <input className={inputClass} type="text" id="vehiculopatente" name="vehiculopatente" required />

                        <label className={labelClass} htmlFor="vehiculomarca">Marca</label>
                        <input className={inputClass} type="text" id="vehiculomarca" name="vehiculomarca" required />

                        <label className={labelClass} htmlFor="vehiculomodelo">Modelo</label>
                        <input className={inputClass} type="text" id="vehiculomodelo" name="vehiculomodelo" required />

                        <label className={labelClass} htmlFor="vehiculoagno">Año</label>
                        <input className={inputClass} type="number" id="vehiculoagno" name="vehiculoagno" min="1950" max="2100" required />

                        <p className="text-center">
                            <input className="rounded-md py-2 px-8 font-bold text-lg mt-8 bg-[#1e5db2] text-white text-opacity-70 hover:text-opacity-100 cursor-pointer shadow-xl shadow-[rgba(0,0,0,0.3)] hover:shadow-lg hover:shadow-[rgba(0,0,0,0.5)] transition-all ease-in-out duration-300" type="submit" value="Enviar" />
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
}
