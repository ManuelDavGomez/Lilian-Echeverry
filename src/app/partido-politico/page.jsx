import styles from "./partido.module.css";

export const metadata = {
  title: "Lilian Echeverry - Partido Politico",
  description:
    "Descubre más sobre el partido político al que pertenece Lilian Echeverry, futura alcaldesa de Puerto Salgar. Explora la plataforma, los valores y la visión de este partido.",
}

const page = () => {
  return (
    <main>
      <article className={styles.hero_partido_container}>
        <section className={styles.hero_partido_parallax}>
          <section className={styles.hero_partido_parallax_content}>
    
            <h1>
              Quiero que sepas mas <span> sobre nuestro partido politico </span>
            </h1>

          </section>
        </section>
      </article>

      <section className={styles.partido_text_general}>
        <section className={styles.partido_text}>
          <h2>
            Presentacion <span> Politica </span>
          </h2>

          <p>
            Presentamos nuestra aspiración a la Alcaldía de Puerto Salgar, desde
            el Partido Ecologista Colombiano (PEC), fundado el 25 de abril de
            2015 y creado a partir de la resolución 5107 de 2022, otorgada el 10
            de noviembre de 2022 por parte del Consejo Nacional Electoral.
          </p>

          <p>
            Como lo reza el slogan de nuestro partido, SOMOS LA FUERZA POLITICA
            DE LAS CAUSAS APLAZADAS. Es el slogan que mejor describe nuestro
            eterno afán por el desarrollo de Puerto Salgar, y nuestras
            convicciones de defensa de la tierra y la igualdad de los hombres.
            Entre sus principales objetivos se encuentra:
          </p>

          <ul>
            <li>
              La defensa y protección de la vida raizal y afrodescendiente
              colombiana.
            </li>
            <li>
              Protección de la biodiversidad y la fauna silvestre a lo largo y
              ancho del país.
            </li>
            <li>
              Proteger la libertad, actividades de culto y religiosidad de los
              pueblos indígenas.
            </li>
            <li>
              Buscar la paz y la vida digna para los afrocolombianos afectados
              por la violencia política
            </li>
            <li>
              Apoyar la democracia participativa e inclusiva de los pueblos
              marginados en los órganos del poder público.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default page;
