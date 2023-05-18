import { DiscussionEmbed } from 'disqus-react';
import * as Styled from './style';

export type CommentsProps = {
  id: string;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) return null;

  return (
    <Styled.Wrapper>
      <DiscussionEmbed
        shortname="blog-do-josemar-cafumana"
        config={{
          url: `/post/${slug}`,
          identifier: id,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Wrapper>
  );
};
