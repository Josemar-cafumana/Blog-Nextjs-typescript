import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/style';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  ${HeadingStyles} {
    margin: 0;
    margin-top: calc(${theme.spacings.small} - 0.6rem);
    margin-bottom: ${theme.spacings.small};
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  &:hover a {
    color: ${theme.colors.secondary};
  }
  `}
`;

export const Cover = styled.img`
    max-width: 100%;
    transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
`;

export const Excerpt = styled.p``;
