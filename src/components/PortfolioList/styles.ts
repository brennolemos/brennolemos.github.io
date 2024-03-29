import styled from 'styled-components';

export const Item = styled.div`
  background: #fff;
  box-shadow: 0px 1px 5px rgba(45, 57, 64, 0.2),
    0px 3px 4px rgba(45, 57, 64, 0.12), 0px 2px 4px rgba(45, 57, 64, 0.14);
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  overflow: hidden;
  max-width: 23.125rem;
  margin-left: auto;
  margin-right: auto;

  img {
    align-self: flex-start;
    border-bottom: 1px solid #dce2e6;
  }

  .item-info {
    padding: 1rem;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  /* color: #2d3940; */
  color: ${(props) => props.theme.colors.textSecondary};
`;
