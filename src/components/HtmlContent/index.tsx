import * as Styled from './style';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};
