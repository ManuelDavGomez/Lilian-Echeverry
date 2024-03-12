import Link from "next/link";
import Image from "next/image";
import "./foot.css";

const Foot = () => {
  return (
    <footer>
      <section className="foot_container_general">
        <Image
          src="/logo/logo_hero.avif"
          alt="Image Componente"
          width={100}
          height={100}
          loading="lazy"
        />

        <article className="foot_links_articles">
          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/quien-soy">Quien es Lilian</Link>
            </li>

            <li>
              <Link href="/partido-politico">Partido Politico</Link>
            </li>
            <li>
              <Link href="/vision-valores">Vision & Valores</Link>
            </li>
          </ul>
        </article>

        <article className="copy_container">
          <p className="copy_title">2023 All Rights Reserved.</p>

          <div className="copy_icons">
            <a
              href="https://www.facebook.com/profile.php?id=100095201593965"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/lilian__echeverry" target="_blank">
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573239863719"
              target="_blank"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
};
export default Foot;
