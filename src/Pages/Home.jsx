import React, { useState, useEffect } from "react";

const Home = () => {
  const [title, setTitle] = useState(
    "Breno Lemos | Desenvolvedor Front-End em Fortaleza"
  );

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
