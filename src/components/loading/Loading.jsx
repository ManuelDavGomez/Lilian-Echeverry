'use client'

import { SyncLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <article className="spinner-container">
      <SyncLoader color="#ff00c8" size={30}  />
    </article>
  );
};

export default Loading;
