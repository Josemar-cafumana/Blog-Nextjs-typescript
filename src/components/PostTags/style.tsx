import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    max-width: ${theme.sizes.content};
    width: 100%;
    padding: ${theme.spacings.large};

    span {
      margin: 0 0 0 .5rem;
    }
    span::after {
      content: ', ';
    }
    span:last-child::after {
      content: '';
    }
    span::before {
      content: ' ';
    }
    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
