import React from 'react';

import logo from '../../assets/images/logo.svg';
import * as S from './Footer-styles';

export default () => {
  return (
    <S.Footer>
      <ul className="redes-sociais d-flex">
        <li className="mr-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/brenolemos/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/brennolemos"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <p>
        Made with{' '}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{' '}
        and React
      </p>
      <img src={logo} className="logo" alt="Logo Breno Lemos" />
    </S.Footer>
  );
};
