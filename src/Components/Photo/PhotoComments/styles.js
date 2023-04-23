import styled from 'styled-components';

export const Container = styled.div`
  .comment {
    height: 18rem;
    overflow-y: auto;
    word-break: break-word;
    padding: 0 2rem;
    li {
      margin-bottom: 0.5rem;
      line-height: 1.2rem;
    }
  }
  .comment.single {
    padding: 0px;
  }
`;
