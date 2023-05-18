import * as Styled from './style';

export type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};
