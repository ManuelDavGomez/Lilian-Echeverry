import styles from "./ciencia.module.css";

export const metadata = {
  title: "Lilian Echeverry - Propuestas",
  description:
    "Conoce a Lilian Echeverry, candidata a la alcaldía de Puerto Salgar comprometida con el progreso y bienestar de nuestra comunidad. Explora sus propuestas y únete a la fuerza de un nuevo comienzo para nuestra ciudad.",
};

const page = () => {
  return (
    <main>
      <article className={styles.hero_ciencia_container}>
        <section className={styles.hero_ciencia_parallax} />
      </article>

      <section className={styles.ciencia_text_general}>
        <section className={styles.ciencia_text}>
          <h1>
            Eje de <span> CIENCIA Y TECNOLOGÍA </span>
          </h1>

          <p>
            Nuestro gobierno verá la ciencia y la tecnología como una
            herramienta de apalancamiento a los ejes 1, 2 y 3, es decir, al Eje
            de Equidad, Productividad y Desarrollo Económico para la mujer de la
            ciudad y del campo, al eje de Emprendimiento Agroindustrial y sus
            cadenas productivas, y al eje de Desarrollo Social Integral para la
            infancia, la adolescencia, el Adulto Mayor y la familia. El eje de
            Ciencia y Tecnología contendrá programas transversales y con una
            visión de aplicación práctica de la capacitación, que permita que
            los actores sociales en procesos de capacitación en ciencia y
            tecnología formen parte de equipos que diseñen y construyan las
            partes y herramientas necesarias en los procesos productivos,
            empresariales, turísticos y demás. Estos contenidos serán
            establecidos desde su planificación, antes de ser implementada en
            los centros educativos y en los procesos de formación técnica. Así
            aterrizaremos un formato de Educación para el trabajo, que atempere
            la ciencia y la tecnología al mundo laboral y a los requerimientos
            de transformación de nuestro proceso.
          </p>

          <h2 style={{ marginTop: "30px" }}>
            Programa: IMPLEMENTACIÓN DE CÁTEDRA Y ESPECIALIDAD DE
            <span>
              CIENCIA Y TECNOLOGÍA EN INSTITUCIONES EDUCATIVAS DE LA CIUDAD,
            </span>
            Y APALANQUE FINANCIERO PARA UN TALLER DE CREACIÓN DE MAQUINARIA Y
            EQUIPOS (Macroproyecto 4)
          </h2>

          <ul>
            <li>
              Apalancamiento al Eje de Equidad, Productividad y Desarrollo
              Económico para la mujer de la ciudad y del campo.
            </li>
            <li>
              Apalancamiento al eje de Emprendimiento Agroindustrial y sus
              cadenas productivas.
            </li>
            <li>
              Apalancamiento al eje de Desarrollo Social Integral para la
              infancia, la adolescencia, el Adulto Mayor y la familia.
            </li>
            <li>
              Construcción partes y herramientas necesarias en procesos
              productivos, empresariales, turísticos y demás.
            </li>
            <li>
              Implementación Ciencia y Tecnología en centros educativos y en
              procesos de formación técnica.
            </li>
            <li>Educación para el trabajo.</li>
            <li>
              Creación de un departamento que dirija ciencia y tecnología.
            </li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            Programa: <span>TECNOLOGIA ENDOGENA</span>
          </h2>

          <ul>
            <li>
              Legislación local para la consolidación de ciencia y tecnología
              endógena.
            </li>
            <li>
              Costos de implementación de industria mediante la fabricación de
              maquinaria y equipo.
            </li>
            <li>Financiamiento de maquinaria y equipo empresarial.</li>
            <li>
              Innovación, ciencia y tecnología, para la implementación
              agroindustrial.
            </li>
            <li>Competitividad sistemas de producción.</li>
            <li>
              Procesos de creación de productos, inventos, y diseños de
              herramientas para implementación de industria y empresarismo.
            </li>
            <li>
              Apalanque financiero Taller de Creación de maquinaria y Equipos
              (Macroproyecto 4).
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
