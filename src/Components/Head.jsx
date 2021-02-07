import React from 'react';

const Head = ({ title }) => {
  React.useEffect(() => {
    document.title = `${title} - Breno Lemos | Desenvolvedor Front-End em Fortaleza`;
  }, [title]);
  return <></>;
};

export default Head;
