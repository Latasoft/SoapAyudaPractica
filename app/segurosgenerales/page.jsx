import SegurosGeneralesForm from '../../components/SegurosGeneralesForm';

export const metadata = {
    title: 'Seguros Generales'
};

export default function Page() {
    return (
        <main className="text-center">
            <section className="text-center max-w-screen-md mx-auto mb-0 md:mb-40">
                <h1 data-aos-once="true" data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#1e5db2] mt-16 md:mt-28 mb-6">Seguros Generales</h1>
                <p data-aos-once="true" data-aos="fade-up" className="text-lg md:text-xl font-medium text-black text-opacity-60 mx-6 mb-10 md:mb-16">Completa el formulario y te contactaremos con una cotización.</p>

                <div data-aos-once="true" data-aos="fade-down" className="pt-4 pr-4 pb-10 pl-4 bg-gradientA rounded-none md:rounded-xl relative overflow-hidden text-left">
                    <SegurosGeneralesForm />
                </div>
            </section>
        </main>
    );
}