"use client";

import React, { useState } from "react";
import styles from "../noticias.module.css";
import noticiasData from "../../../../public/noticeNueva.json";
import Image from "next/image";

export const metadata = {
  title: "Lilian Echeverry - Noticias nuevas",
  description:
    "Mantente al tanto de todas las últimas noticias y novedades sobre Lilian Echeverry, la futura alcaldesa de Puerto Salgar. Descubre sus proyectos, eventos y logros, somos la fuerza de un nuevo comienzo."
};

const Page = () => {
  const itemsPerLoad = 2;

  const [loadedNoticias, setLoadedNoticias] = useState(itemsPerLoad);
  const [expandedStates, setExpandedStates] = useState(
    noticiasData.map(() => false)
  );
  const currentNoticias = noticiasData.slice(0, loadedNoticias);

  const toggleContent = (index) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const loadMore = () => {
    setLoadedNoticias((prevLoaded) => prevLoaded + itemsPerLoad);
  };

  return (
    <main>
      <article className={styles.hero_noticias_container}>
        <section className={styles.hero_noticias_parallax} />
      </article>

      <section className={styles.noticias_container_global}>
        <h2>NOTICIAS NUEVAS</h2>

        <article className={styles.noticias_container_general}>
          <article className={styles.noticias_container}>
            {currentNoticias.map((noticia, index) => (
              <article className={styles.noticias_item} key={noticia.id}>
                <div className={styles.noticias_img_container}>
                  <Image
                    className={styles.noticias_img}
                    src={noticia.img}
                    alt="wds"
                    width={"300"}
                    height={"300"}
                  />
                </div>

                {expandedStates[index] ? (
                  <div>
                    <h3>{noticia.titulo}</h3>
                    {noticia.contenido.split("\n").map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                    <button onClick={() => toggleContent(index)}>
                      Mostrar menos
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3>{noticia.titulo}</h3>
                    <p>{noticia.contenido.split("\n")[0]}</p>
                    <button onClick={() => toggleContent(index)}>
                      Mostrar más
                    </button>
                  </div>
                )}
              </article>
            ))}
          </article>

          {loadedNoticias < noticiasData.length && (
            <button onClick={loadMore} className={styles.cargar_btn}>
              <span>Ver más Noticias</span>
            </button>
          )}
        </article>
      </section>
    </main>
  );
};

export default Page;
