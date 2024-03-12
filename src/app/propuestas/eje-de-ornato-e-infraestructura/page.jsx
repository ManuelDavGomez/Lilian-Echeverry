import styles from "./ornato.module.css";

export const metadata = {
  title: "Lilian Echeverry - Propuestas",
  description:
    "Conoce a Lilian Echeverry, candidata a la alcaldía de Puerto Salgar comprometida con el progreso y bienestar de nuestra comunidad. Explora sus propuestas y únete a la fuerza de un nuevo comienzo para nuestra ciudad.",
};

const page = () => {
  return (
    <main>
      <article className={styles.hero_ornato_container}>
        <section className={styles.hero_ornato_parallax} />
      </article>

      <section className={styles.ornato_text_general}>
        <section className={styles.ornato_text}>
          <h1>
            Eje de <span> ORNATO E INFRAESTRUCTURA</span>
          </h1>

          <p>
            En el quinto eje de ornato e infraestructura se resalta de manera
            importante la CONSTRUCCIÓN DE VÍAS Y LA ADECUACIÓN Y MEJORA DEL
            TRANSPORTE PÚBLICO DE EL MUNICIPIO. Este programa constituye el
            macroproyecto 5 de nuestra administración. Contempla la realización
            de estudios, diseños y procesos que acerquen a Puerto Salgar a la
            construcción de un eje turístico que parta por la habilitación de
            las vías del ferrocarril, mediante convenio con ferrocarriles
            Nacionales. Este eje tiene un segundo macro proyecto que sería el
            número 6, denominado APRESTAMIENTO PARA EL DESARROLLO Y SISTEMAS
            TURÍSTICOS, y que perfila una serie de tendencias del turismo local
            para ser presentadas a diversos financiadores a nivel nacional e
            internacional, que nos permita presentar a Puerto salgar como un
            destino turístico, que involucre 100 empleos directos. Para ello se
            hace necesario generar un gran programa de ordenamiento territorial,
            un programa de planeación y atención en riesgos y desastres, un
            programa de manejo de residuos sólidos y un cuarto programa de
            fomento y gestión ambiental. Mediante estos cuatro programas
            lograremos generar un alto impacto no solo en el eje de ornato e
            infraestructura, sino que tendrá su reflejo directo en el empleo,
            los ingresos de capital para las familias y el mejoramiento del
            nivel de vida.
          </p>

          <h2 style={{ marginTop: "30px" }}>
            Programa: <span> VIAS Y TRANSPORTE </span> PÚBLICO (Macroproyecto 5)
          </h2>

          <ul>
            <li>
              Realización de estudios y procesos de convenio para la
              Construcción de metrocable turístico sobre el rio Magdalena, que
              abarate presupuestos de transporte para la población, apalancando
              el turismo de Salgar.
            </li>
            <li>Desarrollo vial del centro de Puerto Salgar.</li>
            <li>
              Estudio de proyecto del tren de cercanías como obra metropolitana
              y de región entre la Dorada y Puerto Salgar.
            </li>
            <li>
              Delimitación y construcción de cinco kilómetros de ciclo ruta,
              creando una malla vial con corredores verdes para este medio de
              movilidad.
            </li>
            <li>
              Dotación de elementos para potencializar la cultura de la
              bicicleta y, en general, del transporte no motorizado.
            </li>
            <li>
              Diseño y adelanto de Desarrollo de malla vial rural de las veredas
              del municipio.
            </li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            Programa: <span> PUENTES, ROUNDPOINTS, </span> Y PASOS ELEVADOS
          </h2>

          <ul>
            <li>
              Diseño y construcción de puentes y pasos elevados sobre vías
              nacionales.
            </li>
            <li>
              Dar continuidad a la proyección de construcción de obras ya
              diseñadas.
            </li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            Programa: APRESTAMIENTO PARA EL
            <span> DESARROLLO Y SISTEMAS TURÍSTICOS </span> (Macroproyecto 6)
          </h2>

          <ul>
            <li>
              Construcción de vías y la adecuación y mejora del transporte
              público de la ciudad.
            </li>
            <li>
              Realización de estudios, diseños y procesos que acerquen a Salgar
              a la construcción de un metrocable.
            </li>
            <li>Diseño y proyección de Destino Turístico.</li>
            <li>100 empleos directos de Turismo.</li>
            <li>100 Micro empresas turísticas.</li>
            <li>
              5 kilómetros de ciclovía, con corredores verdes, o corredores de
              movilidad integral, dotándolos de andenes amplios, espacios para
              la bicicleta, arborización, bahías, señalización e iluminación
              adecuada, preparando a Salgar para el turismo nacional.
            </li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            Programa: OPTIMIZACIÓN DE <span> TRANSITO MUNICIPAL </span>
          </h2>

          <ul>
            <li>
              Tránsito, policías y personal de primeros auxilios, con presencia
              permanente en sectores estratégicos del municipio.
            </li>
            <li>
              Planes de choque para descongestión ante cualquier eventualidad.
            </li>
            <li>
              Buena señalización de tránsito, y reestructurar los sentidos de
              las vías.
            </li>
            <li>
              Fortalecer la capacidad de reacción para atender un incidente de
              tránsito.
            </li>
            <li>Fotomultas.</li>
            <li>Mototaxismo.</li>
            <li>Taxis.</li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            Programa: ORDENAMIENTO <span> TERRITORIAL </span>
          </h2>

          <ul>
            <li>Predios en zona de riesgo.</li>
            <li>Predios del municipio, de ferrocarriles nacionales y otros.</li>
            <li>
              Legalización de predios, para el diseño y reestructuración del
              municipio.
            </li>
            <li>Programa de ordenamiento territorial.</li>
            <li>Programa de planeación y atención en riesgos y desastres.</li>
            <li>Programa de manejo de residuos sólidos.</li>
            <li>Programa de fomento y gestión ambiental.</li>
            <li>Impacto en el eje de ornato e infraestructura</li>
          </ul>

          <ul style={{ marginTop: "20px" }}>
            <li>
              <strong>
                <span className={styles.span_general}> SUBPROGRAMA: </span> PLANEACIÓN Y ATENCION INTEGRAL DE
                RIESGOS
              </strong>
            </li>
            <li>
              <strong>
                <span className={styles.span_general}> SUBPROGRAMA: </span> VIVIENDA
              </strong>
            </li>
            <li>
              <strong>
                <span className={styles.span_general}> SUBPROGRAMA: </span> MANEJO DE RESIDUOS SOLIDOS
              </strong>
            </li>
            <li>
              <strong>
                <span className={styles.span_general}> SUBPROGRAMA: </span> FOMENTO Y GESTIÓN AMBIENTAL
              </strong>
            </li>
          </ul>

          <a
            href="/PLAN DE GOBIERNO PUERTO SALGAR.pdf"
            download="Plan de gobierno"
            className={styles.custom_btn}
          >
            <i className="bi bi-filetype-pdf"></i> Descargar Plan de Gobierno
          </a>
        </section>
      </section>
    </main>
  );
};

export default page;
