import Pdf from "@/components/pdf/Pdf";
import styles from "./about.module.css";

export const metadata = {
  title: "Lilian Echeverry - Sobre mi",
  description:
    "Descubre quién está detrás de Lilian Echeverry, futura alcaldesa de Puerto Salgar, conoce más sobre mi pasión, experiencia y visión. Somos la fuerza de un nuevo comienzo",
};

const page = () => {
  return (
    <main>
      <article className={styles.hero_about_container}>
        <section className={styles.hero_about_parallax}>
          <section className={styles.hero_about_parallax_content}>
            <h1>
              Descubre más <span> sobre mí </span> y mi trayectoria para que te
              unas a mi causa.
            </h1>
          </section>
        </section>
      </article>

      <section className={styles.about_text_general}>
        <section className={styles.about_text}>
          <h2>
            <span> Quien </span> soy yo
          </h2>

          <p>
            Soy una mujer empática, perseverante, servicial, ordenada, capaz de
            concentrarme en objetivos específicos hasta alcanzarlos. ¡Únete a
            nuestra causa y seamos agentes de cambio Me considero una mujer
            fuerte, empoderada, de buen carácter, con habilidades en manejo de
            trabajo en equipo y liderazgo, que goza de gran aceptación y
            credibilidad, que crecí en una familia de principios y valores que
            me infundio la honestidad, el trabajo en equipo, el respeto por el
            otro, y el honrar los compromisos. <br /> tengo ideas innovadoras y
            me gustan los desafíos en los nuevos proyectos que me pueden
            proponente La inseguridad, el desempleo y la violencia contra la
            mujer son problemas que debemos abordar con determinación y
            valentía. Puerto Salgar es, para mi y para mis equipos, una causa,
            es una esperanza, es el lugar amado en el cual pretendemos mostrar
            que la igualdad y el desarrollo son posibles, porque sus ciudadanos
            están vivos, entendiendo una causa común, la cual es construir un
            hábitat humano que sea ejemplo de democracia y virtud para la
            nación. Puerto Salgar y el Magdalena Medio han sido territorios
            desagrados en el conflicto y la corrupcion, asumiendo la carga del
            mismo, y soportando sus efectos sociales en desigualdad de
            condiciones con relación a los demás territorios. <br /> Haremos un
            gobierno en nuestra ciudad relacionada con los lineamientos
            nacionales, por lo que la mujer, su empleo y su desarrollo, sera
            centro de las políticas públicas. Protegeremos los derechos de las
            mujeres y priorizaremos el crecimiento y el sano desarrollo de
            nuestros niños y niñas. Hago un llamado a todos los Salgareños a
            unirse a esta causa. Consolidaremos un sello de mujer con la total
            convicción de la ternura y de la lucha, en una sola mirada; una
            mujer dadora de vida y portadora de banderas; una mujer que ama el
            idilio sin olvidar que también convoca al combate, una mujer centro
            de la familia y simbolo de la unidad y de la esperanza, con apoyos y
            programas que permitan su inserción laboral y productiva. <br /> Mi
            carácter y persistencia me obligaron siempre a avanzar, a cambiar la
            adversidad por los sueños, y toda mi vida ha transitado en la
            defensa de los derechos del colectivo, lo cual hice también durante
            los dos años que estuve al frente a la oficina de Gestora Social de
            Puerto Salgar, como lo hago todos los días caminando mi municipio, y
            conociendo cada necesidad en cada barrio, en cada familia.
          </p>

          <h2 style={{ marginTop: "30px", textAlign: "center" }}>
            Mi hoja de <span> vida </span>
          </h2>

          <Pdf />
        </section>
      </section>
    </main>
  );
};

export default page;
