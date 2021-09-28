import React from 'react';

const description = 'Breno Lemos | Desenvolvedor Front-End em Fortaleza';

type HeadProps = {
  title: string;
};

const Head = ({ title }: HeadProps) => {
  React.useEffect(() => {
    document.title = title ? `${title} - ${description}` : description;
  }, [title]);

  return <></>;
};

export default Head;
