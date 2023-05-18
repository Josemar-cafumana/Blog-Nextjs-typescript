import { ArticleHeaderProps, ArticleHeader } from 'components/ArticleHeader';
import { HtmlContent } from 'components/HtmlContent';
import { PostContainer } from 'components/PostContainer';
import * as Styled from './style';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content,
}: PostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          title={title}
          excerpt={excerpt}
          id={id}
          cover={cover}
          createdAt={createdAt}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
