import styled from 'styled-components';

export const Timeline = styled.div`
  .timeline {
    margin: 0 auto;
    padding: 15px;
  }
  .timeline li {
    position: relative;
  }
  .timeline__item {
    position: relative;
    padding: 5px 15px 15px 30px;
    margin-left: 15px;
    border-left: 2px solid #626d73;
  }
  .timeline__icon {
    position: absolute;
    top: 5px;
    left: -15px;
    /* // background: linear-gradient(101.31deg, #deeb52 0%, #afbf30 100%); */
    background: #cbdc3d;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 20px;
    color: #2d3940;
  }
  .timeline__period,
  .timeline__place {
    font-style: italic;
    font-size: 14px;
    color: #95a0a6;
  }
  .timeline__period::after {
    content: '';
    display: block;
    width: 60px;
    height: 5px;
    background: linear-gradient(94.76deg, #deeb52 0%, #afbf30 100%);
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .timeline__title {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: ${(props) => props.theme.colors.textContent};
    margin-bottom: 5px;
    max-width: 180px;
  }
`;
