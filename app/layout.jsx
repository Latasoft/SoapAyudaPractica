

import '../styles/globals.css';
import Footer from '../components/footer.jsx';
import Navbar from '../components/navbar.jsx';
import AOSInitializer from '../components/AOSInitializer.jsx';
import GoogleAnalitics from '../components/GoogleAnalitics.jsx';

export const metadata = {
    title: {
        template: '%s | Soap Ayuda',
        default: 'Soap Ayuda'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={` scroll-smooth `}>
            <head>
                <title>{metadata.title.default}</title>

                <meta name="description" content="Ayuda a instituciones y fundaciones mediante la venta online del seguro obligatorio." />
                <meta name="keywords" content="Soap Ayuda, Soap, seguro obligatorio, seguro automotriz, Cruz Roja Chilena, DHermes, Primera Compañía de Bomberos de Valparaiso, Fundación Apoyándote" />
                <meta charSet="UTF-8" />
                
                <meta property="og:title" content="Soap Ayuda" />
                <meta property="og:description" content="Ayuda a instituciones y fundaciones mediante la venta online del seguro obligatorio." />

                <meta property="og:url" content="https://soapayuda.cl" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Soap Ayuda" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Soap Ayuda" />
                <meta name="twitter:description" content="Ayuda a instituciones y fundaciones mediante la venta online del seguro obligatorio." />

            </head>
            <body id='tope' className={` pb-0 lg:pb-4 pt-24 sm:pt-16 md:pt-20 lg:pt-24 bg-[linear-gradient(-9deg,#fff,#fff,#eee,#fff,#e8e8e8)] font-sans `}>
                <AOSInitializer />
                <GoogleAnalitics />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
