import Foot from "@/components/foot/Foot";
import "./globals.css";
import Navbar from "@/components/header/Navbar.jsx";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";
import Notice from "@/components/notice/News.jsx";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Particless = dynamic(() => import("@/components/Particle/Particless"), {
  ssr: false,
});

export const metadata = {
  title: "Lilian Echeverry",
  description:
    "Conoce a Lilian Echeverry, candidata a la alcaldía de Puerto Salgar comprometida con el progreso y bienestar de nuestra comunidad. Somos la fuerza de un nuevo comienzo",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Lilian Echeverry candidata",
    "Elecciones municipales Puerto Salgar",
    "Propuestas Lilian Echeverry",
    "Políticas Lilian Echeverry",
    "Campaña electoral Puerto Salgar",
    "Elecciones Puerto Salgar",
    "Lilian Echeverry",
    "partido politico",
    "partido ecologista",
    "somos la fuerza de un nuevo comienzo"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />

        <Link rel="shortcut icon" href="/app/favicon.ico" sizes="any" />

        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="43200" />
      </head>

      <body suppressHydrationWarning={true} className={roboto.className}>
        <header>
          <Navbar />
        </header>

        <article style={{ zIndex: "1", position: "absolute" }}>
          <Particless />
        </article>

        {children}

        <Notice />

        <Foot />

        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
          defer
        ></script>
      </body>
    </html>
  );
}
