"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Galery from "@/components/galery/Galery";
import dynamic from "next/dynamic";
import Loading from "@/components/loading/Loading";
import Form from "@/components/form/Form";
import Link from "next/link";

export default function Home() {
  const [showCarga, setShowCarga] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarga(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const Carga = dynamic(() => import("@/components/carusel/Carusel"), {
    loading: () => <Loading />,
    ssr: false,
  });

  return (
    <main>
      <section className={styles.container_general}>
        <article className={styles.hero_container}>
          <section className={styles.hero_parallax}>
            <section className={styles.hero_parallax_content}>
              <article className={styles.hero_logo}>
                <Image
                  src="/logo/logo_hero.avif"
                  width={220}
                  height={135}
                  alt="Logo de la campaña"
                  style={{ marginBottom: "20px" }}
                  loading="lazy"
                />
                <Link href={"/quien-soy"}>
                  <button
                    className={styles.btn}
                    style={{ marginBottom: "20px" }}
                  >
                    Saber mas sobre Lilian
                  </button>
                </Link>
              </article>

              <article className={styles.hero_img_container}>
                <Image
                  src="/image/echeverry.avif"
                  width={431}
                  height={665}
                  alt="Candidata a la alcaldia Lilian Echeverry"
                  loading="lazy"
                />
              </article>
            </section>
          </section>
        </article>

        <section className={styles.home_container_general}>
          <h1>
            Conoce a <span> Lilian Echeverry</span>, candidata a la alcaldía de
            Puerto Salgar
          </h1>
        </section>

        <section className={styles.about_container_general}>
          <h2>
            Conoce mas <span>sobre mi</span>
          </h2>
          <section className={styles.about_container}>
            <article className={styles.about_text}>
              <p>
                Soy Lilian Echeverry Galindo, una persona empática, perseverante
                y servicial. Me considero ordenada y capaz de concentrarme en
                objetivos específicos hasta alcanzarlos. Disfruto de los
                desafíos en nuevos proyectos y tengo ideas innovadoras. Me veo
                como una mujer fuerte, empoderada y de buen carácter, con
                habilidades en el trabajo en equipo y liderazgo, ganando
                aceptación y credibilidad.
                <br />
                Actualmente, estoy cursando una especialización en gerencia y
                seguridad en el trabajo.
                <br />
              </p>
              <Link href={"/quien-soy"}>
                <button className={styles.btn}>Saber mas sobre Lilian</button>
              </Link>
            </article>

            <article className={styles.about_img}>
              <Image
                src="/image/sobre_mi.avif"
                width={210}
                height={300}
                alt="Foto de LIlian Echeverry"
                loading="lazy"
              />
            </article>
          </section>
        </section>

        <section className={styles.volunted_container_general}>
          <h2>
            Un futuro prometedor <span>está a solo un clic de distancia</span>
          </h2>
          <article className={styles.volunted_container}>
            <a
              href="https://api.whatsapp.com/send?phone=573239863719"
              target="_blank"
              alt="Enlace de Whatsapp"
            >
              <button className={styles.btn}>Quiero ser voluntario</button>
            </a>
          </article>
        </section>

        <section className={styles.propuestas_container_general}>
          <h2>
            Programa de <span>gobierno</span>
          </h2>

          <section className={styles.propuestas_container}>
            <section className={styles.propuestas_img}>
              <Image
                src="/image/gobierno.avif"
                width={500}
                height={500}
                alt="Tarjeta sobre el programa de gobierno"
                loading="eager"
              />
            </section>

            <section className={styles.propuestas_text}>
              <p>
                Estas iniciativas están enfocadas en fortalecer el{" "}
                <span> Estado de Bienestar </span> y mejorar la calidad de vida
                de todos los ciudadanos. Una de nuestras prioridades es{" "}
                <span> impulsar el empleo </span>, fomentando oportunidades
                laborales. Además, nos comprometemos con la
                <span> seguridad alimentaria </span>, buscando erradicar el
                hambre y la malnutrición, dos desafíos cruciales. También
                otorgamos gran importancia al apoyo y la{" "}
                <span> protección a la mujer </span> en la sociedad.No menos
                importante es el{" "}
                <span> desarrollo sano y armonioso de los niños </span>, que es
                otro aspecto fundamental de nuestras propuestas.
              </p>
            </section>
          </section>
        </section>

        <section className={styles.partido_container_general}>
          <h2>
            Partido <span>politico</span>
          </h2>

          <section className={styles.partido_container}>
            <section className={styles.partido_img}>
              <Image
                src="/logo/partido_logo.png"
                width={600}
                height={600}
                alt="Logo del partido politico"
                loading="eager"
              />
            </section>

            <section className={styles.propuestas_texto}>
              <p>
                Este partido político se compromete firmemente a promover la
                defensa y protección de la vida raizal y afrodescendiente, así
                como a preservar nuestra biodiversidad y fauna silvestre.
                Nuestro enfoque está en proteger la libertad de todos los
                ciudadanos.¡Únete a nosotros en esta causa para crear un mejor
                mañana para nuestra sociedad y nuestro entorno natural!
              </p>
              <Link href={"/partido-politico"}>
                <button className={styles.btn}>
                  Saber mas sobre mi partido
                </button>
              </Link>
            </section>
          </section>
        </section>

        <section className={styles.carusel_container_general}>
          <section className={styles.carusel_container}>
            <article className={styles.text_carousel}>
              <h2>
                Nuestro Gerente y <span>Concelajes</span>
              </h2>
              <p>
                Quiero presentarte a nuestros concejales y a nuestro gerente,
                quienes jugarán un papel fundamental en la mejora y desarrollo
                del puerto Slagar. Trabajaremos juntos incansablemente para
                lograr un puerto que beneficie a toda la comunidad y fomente un
                crecimiento sostenible. Además de nuestro equipo directivo,
                contamos con un grupo de colaboradores apasionados y
                comprometidos que se unen a esta causa. Juntos, estamos
                decididos a construir un futuro más próspero y prometedor para
                nuestro puerto y sus alrededores. ¡Somos la fuerza de un nuevo
                comienzo!
              </p>
            </article>

            <article className={styles.carusel_img}>
              {showCarga ? <Carga /> : <Loading />}
            </article>
          </section>
        </section>

        <Galery />

        <section className={styles.follow_container_general}>
          <h2>
            Sigueme en mis <span>redes sociales</span>
          </h2>
          <article className={styles.follow_container}>
            <a
              href="https://www.facebook.com/profile.php?id=100095201593965"
              target="_blank"
              alt="Enlace a la pagina de Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/lilian__echeverry"
              target="_blank"
              alt="Enlace a la pagina de Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573239863719"
              target="_blank"
              alt="Enlace de Whatsapp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </article>
        </section>

        <Form />
      </section>
    </main>
  );
}
