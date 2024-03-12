const Pdf = () => {
  return (
    <article
      style={{
        zIndex: "99",
        marginBottom: "30px",
        width: "90%",
        display: "block",
        margin: "0 auto",
      }}
    >
      <iframe
        src="https://drive.google.com/file/d/1b7ma0QIt6KJcw6r7DIiGZDll92SGZlP8/preview"
        width="100%"
        height="600px"
        title="PDF Viewer"
      />
    </article>
  );
};

export default Pdf;
