import styles from "./emprendimiento.module.css";

export const metadata = {
  title: "Lilian Echeverry - Propuestas",
  description:
    "Conoce a Lilian Echeverry, candidata a la alcaldía de Puerto Salgar comprometida con el progreso y bienestar de nuestra comunidad. Explora sus propuestas y únete a la fuerza de un nuevo comienzo para nuestra ciudad.",
};

const page = () => {
  return (
    <main>
      <article className={styles.hero_emprendimiento_container}>
        <section className={styles.hero_emprendimiento_parallax} />
      </article>

      <section className={styles.emprendimiento_text_general}>
        <section className={styles.emprendimiento_text}>
          <h1>
            Eje de <span> De Emprendimiento Agroindustrial </span> y sus cadenas
            productivas
          </h1>

          <p>
            Existirá la iniciativa de un sistema de capacitación integrado con
            el SENA y con otras instituciones de educación media, que
            posibiliten e incentiven la capacitación en finanzas y en áreas
            específicas, a las personas identificadas como posibles benefactores
            de los programas microempresariales y de créditos blandos,
            incentivando mediante ello a esta población a su mejoramiento y
            competitividad, elevando niveles de conocimiento que repercutan en
            su nivel de vida y la optimización del servicio de cada uno de estos
            empresarios. Esa productividad laboral con sistemas de capacitación
            permitirá elevar la calidad en el ofrecimiento de los bienes y
            servicios del municipio de Puerto Salgar hacia el turismo, así como
            a la economía de exportación de nuestro producto, mediante la
            implementación de cadenas productivas, fruto del emprendimiento
            agroindustrial. De esta manera estaríamos ofreciendo la capacitación
            en habilidades blandas para un enfoque de la población que buscaría
            el mejoramiento de su economía en proceso de formalización, por una
            parte, y por otra las capacidades y habilidades duras para personas
            que tengan la capacidad de involucrarse en entidades asociativas que
            fomenten el emprendimiento agroindustrial del municipio, recogiendo
            la producción rural del perímetro y reconvirtiéndolos en productos
            con valor agregado, que nos permita generar cadenas productivas, que
            posibiliten a su vez establecer un equilibrio en la seguridad
            alimentaria, un aumento en la productividad y el nivel de vida del
            municipio, y una estabilidad económica para sus ciudadanos
          </p>

          <h2 style={{ marginTop: "30px" }}>
            Programa: PRESENTACIÓN DE
            <span> PROPUESTAS PARA FORTALECIMIENTO, MICROEMPRESARIAL </span> EN
            PROCESOS DE TRANSFORMACIÓN (Macroproyecto 2)
          </h2>

          <ul>
            <li>Suministro créditos bancarios.</li>
            <li>Herramientas técnicas y logísticas para transformación.</li>
            <li>Aseguramiento de cadenas productivas.</li>
            <li>Desarrollo agrícola, empresarial, productividad y empleo.</li>
            <li>Implementación de sistema de microeconomías.</li>
            <li>Generación de un esquema de seguridad alimentaria.</li>
            <li>Sistematización de capacidades productivas.</li>
            <li>Nuevos renglones de producción.</li>
            <li>Programas microempresariales y de créditos blandos.</li>
            <li>Mejoramiento y competitividad.</li>
            <li>Calidad de los bienes y servicios.</li>
            <li>Implementación Sistema Turismo.</li>
            <li>Exportación de nuestro producto.</li>
            <li>Capacitación en habilidades blandas.</li>
            <li>
              Capacidades y habilidades duras para personas que tengan la
              capacidad de involucrarse en entidades asociativas que fomenten el
              emprendimiento agroindustrial de la ciudad.
            </li>
            <li>Implementación de una zona industrial.</li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            PROGRAMA: PROPUESTA DE<span> EMPRENDIMIENTO </span>
          </h2>

          <ul>
            <li>Formalización de negocios, Microempresas, famiempresas.</li>
            <li>Formalización del empleo.</li>
            <li>Apoyo a los emprendedores.</li>
            <li>Formalizar el empleo y el comercio de las calles.</li>
            <li>Reubicación de vendedores ambulantes.</li>
            <li>
              Recursos de crédito y apalancamiento pequeñas empresas
              formalizadas.
            </li>
            <li>Implementación vocación turística.</li>
            <li>
              Plan contra la pobreza, la desigualdad y la exclusión financiera.
            </li>
            <li>Calificación mano de obra certificada.</li>
            <li>Productos con valor agregado y cadenas productivas.</li>
            <li>Potencialización de Formalización del mercado.</li>
            <li>Sistema de capacitación integrado con el Sena.</li>
            <li>Seguridad alimentaria endógena de la ciudad.</li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>
            PROGRAMA: IMPLEMENTACIÓN DE UN PROGRAMA
            <span> DE LEGALIDAD Y PRODUCTIVIDAD </span>
          </h2>

          <ul>
            <li>Ajustar normatividades y regulaciones a los empresarios.</li>
            <li>Adaptación y dialogo con políticas nacionales.</li>
            <li>
              <strong> Salarios y Cargas regulatorias. </strong>
            </li>
            <li>
              <strong> Empleo estable y protección social. </strong>
            </li>
            <li>
              <strong>
                Formalización de negocios ambulantes informales y empresas.
              </strong>
            </li>
            <li>
              Hoja de ruta uniforme, estable y sencilla, que le permita cumplir
              todos los requisitos necesarios para tener acceso a los créditos
              bancarios y a programas institucionales.
            </li>
            <li>Establecimiento de sistemas cooperativistas.</li>
            <li>
              Diagnóstico o línea base de la informalidad actual de la ciudad.
            </li>
            <li>
              Invima y de otros estamentos vigilantes de la estandarización del
              producto.
            </li>
            <li>
              Adaptación de nuestras políticas de producción y transformación de
              la materia prima mediante estándares locales.
            </li>
            <li>
              Estandarización de la calidad del producto y de sistemas de
              sanidad.
            </li>
            <li>
              Implementación de un régimen laboral temporal para la reactivación
              económica.
            </li>
            <li>
              Simplificación de regímenes tributarios a través de régimen único
              de impuesto a la renta.
            </li>
            <li>
              Sistema Remuneración y salarios de empresas asociativas,
              cooperativas o micro.
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
