import "./form.css";

const Form = () => {
  return (
    <article className="form_container_general">
      <h2>
        Formulario de <span> contacto </span>
      </h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdFTxrEBxz8ecSpR4oTXIzWi3DHU-_nydjQT5C5s4Evo8qF6g/viewform?embedded=true"
        width="640"
        height="590"
      >
        Cargando…
      </iframe>
    </article>
  );
};

export default Form;
