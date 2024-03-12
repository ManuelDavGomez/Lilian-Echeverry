import styles from "./equidad.module.css";

export const metadata = {
  title: "Lilian Echeverry - Propuestas",
  description:
    "Conoce a Lilian Echeverry, candidata a la alcaldía de Puerto Salgar comprometida con el progreso y bienestar de nuestra comunidad. Explora sus propuestas y únete a la fuerza de un nuevo comienzo para nuestra ciudad.",
};

const page = () => {
  return (
    <main>
      <article className={styles.hero_equidad_container}>
        <section className={styles.hero_equidad_parallax} />
      </article>

      <section className={styles.equidad_text_general}>
        <section className={styles.equidad_text}>
          <h1>
            Eje de <span> Equidad, Productividad, y desarrollo Economico </span>
            para la mujer de la ciudad y el campo
          </h1>

          <p>
            Este primer eje transversaliza las acciones de equidad de género y
            equidad geográfica, con la productividad y su aportación en el
            desarrollo económico. Las políticas de igualdad establecen
            estándares de productividad que se ven reflejados en el crecimiento
            económico de la micro y macroeconomía, lo cual redunda en bienestar,
            reflejado, entre otras cosas, en las actitudes intelectuales,
            comportamentales, culturales, sociales y políticas de una sociedad,
            por lo que se hace necesario implementarlas brindando igualdad entre
            hombres y mujeres dentro del aparato productivo del municipio, para
            afrontar el crecimiento económico y asegurar la competitividad,
            buscando que Puerto Salgar tenga, inicialmente, un sistema de
            autosostenibilidad en productos, bienes y servicios.
          </p>

          <h2 style={{ marginTop: "30px" }}>
            Programa: AGUA,<span> TIERRA </span> Y TURISMO
          </h2>

          <ul>
            <li>
              Estudios y viabilidad Construcción Sistema Turístico PARQUE DE LAS
              AGUAS MAGDALENA GRANDE.
            </li>
            <li>
              Implementación de un sistema turístico para el municipio de Puerto
              Salgar, mediante la creación de asociaciones con fines específicos
              de hotelería, alojamiento rural, alimentación, transporte y otros
              servicios.
            </li>
            <li>Condiciones laborales.</li>
            <li>Protección de la legislación laboral.</li>
            <li>
              Procesos organizativos de la mujer trabajadora en Asociatividad.
            </li>
            <li>
              Contratación de dotaciones, alimentación, etc, a través de grupos
              asociativos de mujeres en el municipio.
            </li>
            <li>
              Estructuración y redacción de proyectos turísticos y empresariales
              para el desarrollo económico del municipio de Puerto Salgar.
            </li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            Programa: AGRICULTURA Y<span> DESAROLLO RURAL </span> (Macroproyecto
            1)
          </h2>

          <ul>
            <li>Microcréditos y apoyos institucionales vía proyectos.</li>
            <li>Proyectos productivos.</li>
            <li>Productividad endógena.</li>
            <li>Estabilidad alimentaria de la región.</li>
            <li>Sistema capacitación y aprestamiento para el mundo laboral.</li>
            <li>
              Legalización de predios rurales y urbanos y sistema de
              acompañamiento a proyectos productivos.
            </li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            Programa: <span> EQUIDAD DE GENERO </span>
          </h2>

          <ul>
            <li>Mujer Urbana y Rural en sistemas productivos.</li>
            <li>Crecimiento económico de la micro y macroeconomía.</li>
            <li>
              Sistema de autos sostenibilidad en productos, bienes y servicios.
            </li>
            <li>Implementación Sistema de Guarderías.</li>
            <li>Apoyo logístico y formativo para cuidadoras de los menores.</li>
            <li>
              Diagnóstico y sistematización de empleo de mujer en el sector
              público y privado del municipio.
            </li>
            <li>
              Creación de la bolsa de empleo de Puerto Salgar catalogando
              diferentes áreas de la productividad, y sistema de capacitación.
            </li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            Programa: SISTEMA MUJER EDUCADA <span> ZONA URBANA RURAL </span>
          </h2>

          <ul>
            <li>
              Acompañamiento técnico y sistema de capacitación en sistemas
              productivos.
            </li>
            <li>Sistema Alfabetización y Nivelación Educativa.</li>
            <li>Capacitación para ascenso laboral de la mujer.</li>
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
