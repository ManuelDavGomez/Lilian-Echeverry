import Image from "next/image";
import "./carusel.css";
const Carusel = () => {
  return (
    <section className="carusel_contenedor">
      <section id="carouselExample" className="carousel slide">
        <section className="carousel-inner">
          <article className="carousel-item active" id="item">
            <Image
              src="/concejales/GERENTE.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
          <article className="carousel-item" id="item">
            <Image
              src="/concejales/01.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
          <article className="carousel-item" id="item">
            <Image
              src="/concejales/2.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
          <article className="carousel-item" id="item">
            <Image
              src="/concejales/4.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
          <article className="carousel-item" id="item">
            <Image
              src="/concejales/5.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
          <article className="carousel-item" id="item">
            <Image
              src="/concejales/7.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
          <article className="carousel-item" id="item">
            <Image
              src="/concejales/9.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
          <article className="carousel-item" id="item">
            <Image
              src="/concejales/10.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
          <article className="carousel-item" id="item">
            <Image
              src="/concejales/11.avif"
              width={500}
              height={500}
              alt="sd"
              loading="eager"
            />
          </article>
        </section>
        <button
          id="left"
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          id="right"
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
    </section>
  );
};
export default Carusel;
