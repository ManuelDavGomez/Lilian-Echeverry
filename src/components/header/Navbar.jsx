import "./navbar.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="nav_bar">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image
            src="/logo/logo_hero.avif"
            alt="Image Componente"
            width={50}
            height={30}
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-box-fill"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/quien-soy">
                Quien es Lilian
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mis Propuestas
              </a>
              <ul
                className="dropdown-menu"
                id="dropdown"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    id="menu"
                    href="/propuestas/eje-de-equidad"
                  >
                    Eje de Equidad
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    id="menu"
                    href="/propuestas/eje-de-emprendimiento"
                  >
                    Eje de Emprendimiento
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    id="menu"
                    href="/propuestas/eje-de-desarollo-social"
                  >
                    Eje de Desarollo Social
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    id="menu"
                    href="/propuestas/eje-de-ciencia-y-tecnologia"
                  >
                    Eje de Ciencia y Tecnología
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    id="menu"
                    href="/propuestas/eje-de-ornato-e-infraestructura"
                  >
                    Eje de Ornato e Infraestructura
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Noticias
              </a>
              <ul
                className="dropdown-menu"
                id="dropdown"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    id="menu"
                    href="/noticias/destacadas"
                  >
                    Noticias Destacadas
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    id="menu"
                    href="/noticias/nuevas"
                  >
                    Noticias Nuevas
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/partido-politico">
                Partido Politico
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/vision-valores">
                Vision & Valores
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
