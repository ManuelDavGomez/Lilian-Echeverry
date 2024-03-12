import styles from "./misivalor.module.css";

export const metadata = {
  title: "Lilian Echeverry - Mision & Valores",
  description:
    "Descubre la misión y los valores que guían a Lilian Echeverry y su equipo en su compromiso por un nuevo comienzo para Puerto Salgar. Conoce nuestra visión para la ciudad y cómo trabajamos para alcanzarla.0",
};

const page = () => {
  return (
    <main>
      <article className={styles.hero_misivalor_container}>
        <section className={styles.hero_misivalor_parallax}>
          <section className={styles.hero_misivalor_parallax_content}>
            <h1>
              Aqui te mostrare
              <span> sobre nuestra Vision & Mision para nuestro gobierno </span>
            </h1>
          </section>
        </section>
      </article>

      <section className={styles.misivalor_text_general}>
        <section className={styles.misivalor_text}>
          <h2>
            <span> Vision </span> para Puerto Salgar
          </h2>

          <p>
            Para el fin de año de 2027 vemos a nuestra Puerto Salgar con
            identidad, como una ciudad que ha diseñado su destino. Vemos nuestro
            Puerto Salgar con una comunidad que ha participado en una
            construcción de Plan a largo plazo, visionando el 2030 y el 2050.
            <br />
            <ul>
              <li>
                Vemos nuestro Puerto Salgar con una planta administrativa con
                convicción de servicio.
              </li>{" "}
              <li>
                Vemos nuestra Puerto Salgar reconocida en los instrumentos
                internacionales de financiación a proyectos e inversiones.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar con una ciudadanía llena de
                esperanzas en su territorio, orgullosos de su empuje y de su
                estirpe.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar con jóvenes interesados en su
                desarrollo y participando de expresiones artísticas y sociales.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar con mejor calidad de vida, con
                adultos confiados en su administración municipal, que vuelven a
                creer en la democracia.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar con seguridad y equidad para hombres
                y mujeres, donde prime el respeto por el otro y se supriman las
                violencias de todo tipo.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar con mujeres confiadas en todo rol,
                donde prime el respeto hacia ellas y donde todos ayudemos a su
                seguridad.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar equitativa, con oportunidades de
                estudio, laborales y de esparcimiento para todos.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar con un comercio legal, que dé lustre
                a el municipio, que permita aportes al erario, pero que
                garantice el progreso económico de los comerciantes.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar con un sistema eficiente de
                contratación pública que elimine las opciones de soborno,
                tercerización y corrupción.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar con un eficiente proceso de
                participación comunitaria en los presupuestos, y en comunidades
                fortalecidas en el manejo de proyectos.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar como modelo nacional de Educación,
                Cultura y Ciudadanía, con diseños de implementación de políticas
                públicas reales.
              </li>{" "}
              <li>
                Vemos nuestro Puerto Salgar desarrollando para sus comunidades
                Festivales con carácter formativo en Artes, Cultura, Folclore y
                Construcción de ciudadanía.
              </li>
            </ul>
          </p>

          <h2>
            <span> Valores, Principios y Compromisos </span> de Gobierno
          </h2>

          <p>
            Los valores y principios que han de caracterizar a nuestro gobierno
            y a nuestro equipo de trabajo serán los siguientes: Cada servidor
            Público será responsable y responsabilizado por sus actuaciones, por
            lo que su accionar deberá ser en el marco de la HONESTIDAD, con
            cuidado, diligencia, buena fe y ética profesional. Los ciudadanos
            tendrán un trato de EQUIDAD en todo acto relacionado con el
            Gobierno; para ello se habilitarán canales de comunicación efectivos
            entre los ciudadanos, el despacho de la alcaldesa y la personería
            municipal, para el cumplimiento de atención a las problemáticas y
            necesidades. Los procesos administrativos, de contratación, de
            ejecución de obras y demás, podrán ser vigilados de manera
            permanente por la ciudadanía mediante software sencillo y amigable,
            para garantizar la LEGALIDAD de los funcionarios y la TRANSPARENCIA
            de la contratación, garantizando una efectiva gobernabilidad y un
            cumplimiento de metas en el Plan de Desarrollo. En concordancia con
            la transparencia, el Programa de Gobierno será un documento digital
            que pueda ser fácilmente transferido a los ciudadanos,
            organizaciones y entes de control. El servidor público se compromete
            a realizar un servicio eficiente, de manera amable, oportuna y
            diligente.
            <br />
            Es ley la protección de la biodiversidad y la fauna silvestre.
            Nuestra administración velará por la protección de las libertades,
            las actividades de culto y la religiosidad todos los habitantes del
            municipio, facilitando que existan lugares donde se puedan congregar
            todos los creyentes Buscaremos la paz y la vida digna para los
            afrocolombianos afectados por la violencia política en la región,
            así como para los otros grupos poblacionales. Apoyaremos la
            democracia participativa e inclusiva de los pueblos marginados en
            los órganos del poder público y en pro de la población salgareña.
            Por todo lo anterior, me comprometo a: Me comprometo con un gobierno
            fundamentado en la honestidad, ejecutado de manera gerencial por un
            equipo técnico. Me comprometo a realizar gestión en equipo para un
            proyecto de ciudad, gobernando con los mejores perfiles
            profesionales. Me comprometo a trabajar con comerciantes fomentando
            el turismo, mostrando este ante en el mundo Me comprometo evidenciar
            pobreza local por concentración del conflicto armado.
          </p>
        </section>
      </section>
    </main>
  );
};

export default page;
