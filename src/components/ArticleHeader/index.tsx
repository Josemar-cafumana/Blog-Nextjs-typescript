import * as Styled from './style';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta/index';
import { Heading } from 'components/Heading';
import { StrapiImage } from 'shared-types/strapi-image';
import config from 'config';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="big">{title}hh</Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>

      <Styled.Image>
        <img src={`${config.url}${cover.url}`} alt={cover.alternativeText} />
      </Styled.Image>

      <ArticleMeta
        createdAt={createdAt}
        author={author}
        categories={categories}
      ></ArticleMeta>
    </Styled.Wrapper>
  );
};
