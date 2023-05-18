import { Heading } from 'components/Heading';
import config from 'config';
import Link from 'next/link';
import { StrapiImage } from 'shared-types/strapi-image';
import * as Styled from './style';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ title, excerpt, cover, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={`${config.url}${cover.url}`} alt={title} />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
