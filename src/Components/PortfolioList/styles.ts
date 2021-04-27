import styled from 'styled-components';

export const Item = styled.div`
  background: #fff;
  box-shadow: 0px 1px 5px rgba(45, 57, 64, 0.2),
    0px 3px 4px rgba(45, 57, 64, 0.12), 0px 2px 4px rgba(45, 57, 64, 0.14);
  border-radius: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  overflow: hidden;
  max-width: 370px;
  margin-left: auto;
  margin-right: auto;

  img {
    align-self: flex-start;
    border-bottom: 1px solid #dce2e6;
  }

  .item-info {
    padding: 1rem;
  }

  .badge-secondary {
    background-color: #dce2e6;
    color: #626d73;
    margin-right: 0.5rem;
    /* // font-weight: 00; */
  }

  .badge-secondary:last-child {
    margin-right: 0;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: #2d3940;
`;
