import React from 'react';

const description = 'Breno Lemos | Desenvolvedor Front-End em Fortaleza';
const Head = ({ title }) => {
  React.useEffect(() => {
    document.title = title ? `${title} - ${description}` : description;
  }, [title]);
  return <></>;
};

export default Head;
