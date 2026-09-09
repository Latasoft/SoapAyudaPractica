
import Boton from 'components/button';
import TablaPreciosMutual from 'components/TablaPreciosMutual';
import mutualdeseguros from '/public/mutualdeseguros.png';
import logoBci from '/public/bcibanco.png';
import TablaPreciosBci from 'components/TablaPreciosBci';

export const metadata = {
    title: 'Mutal de Seguros | DHERMES'
};

export default function Page() {
    return (

        <main className="text-center">

            <section className=" text-center mt-20 mb-24 max-w-screen-lg mx-auto">
                <p className=" text-center m-4"><img alt='' src={mutualdeseguros.src} className=" mx-auto h-[89px] sm:h-[144px] w-auto duration-300 ease-in-out block"/></p>
                <TablaPreciosMutual />
                <p className=" text-center m-8 px-8 max-w-screen-sm mx-auto"><Boton enlace='https://core.mutualdeseguros.cl/soap_ms/pago.php?tipodeventa=242' texto='Paga tu SOAP aquí' /></p>
            </section>

            <section className=" text-center mt-20 mb-24 max-w-screen-lg mx-auto">
                <p className=" text-center m-4"><img alt='' src={logoBci.src} className=" mx-auto h-[89px] sm:h-[144px] w-auto duration-300 ease-in-out block"/></p>
                <TablaPreciosBci />
                <p className=" text-center m-8 px-8 max-w-screen-sm mx-auto"><Boton enlace='https://soapweb.bciseguros.cl/web/DatosVehiculo.aspx?Convenios=4C4BD1321EBA80CBD23FF4709FD4CD06' texto='Paga tu SOAP aquí' /></p>
            </section>


        </main>
    );
}
