import * as Styled from './style';
import { HtmlContent } from '../HtmlContent';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <HtmlContent html={footerHtml} />
      </SectionContainer>
    </Styled.Container>
  );
};
