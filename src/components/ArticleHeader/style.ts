import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/style';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${HeadingStyles} {
      margin: 0 0 calc(${theme.spacings.small} - 1rem);
    }
    `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
  margin-bottom: ${theme.spacings.medium};

  & img {
    width:100%;
    height: 100%;
    object-fit: cover;
  }

  `}
`;
