import styled from 'styled-components';

export const Home = styled.section`
  .content {
    padding: 30px;
    flex: 1;
  }

  .content p {
    font-size: 36px;
    color: ${(props) => props.theme.colors.textSecondary};
    line-height: 1.3em;
    margin-bottom: 60px;
  }
`;
