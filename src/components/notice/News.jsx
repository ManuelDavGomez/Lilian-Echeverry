import "./news.css";
import Link from "next/link";

const news = () => {
  return (
    <article className="news_container_general">
      <h2>
        Dirigete a <span> mis noticias </span>
      </h2>

      <section className="news_container">
        <section className="news_items">
          <section className="news_items-details">
            <h3 className="news_items_title">
              Revisa mis noticias <span>mas destacadas </span>
            </h3>
            <p className="news_items_text">
              En este espacio, puedes acceder a las noticias más destacadas
              sobre Lilian, todas reunidas en un mismo lugar.
            </p>
          </section>
          <Link href="/noticias/destacadas">
            <button className="news_items_btn">Ver Noticias</button>
          </Link>
        </section>

        <section className="news_items">
          <section className="news_items-details">
            <h3 className="news_items_title">
              Encuentra mis noticias <span> mas recientes </span>
            </h3>
            <p className="news_items_text">
              Aquí encontrarás las noticias más recientes acerca de Lilian.
              Disfruta de toda la información reunida en un solo lugar.
            </p>
          </section>
          <Link href="/noticias/nuevas">
            <button className="news_items_btn">Ver Noticias</button>
          </Link>
        </section>
      </section>
    </article>
  );
};

export default news;
