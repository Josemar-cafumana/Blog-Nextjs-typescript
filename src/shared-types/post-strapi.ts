import { PostProps } from '../components/Post';
import { PostTag } from './tags';

export type PostStrapi = PostProps & {
  tags: PostTag[];
  slug: string;
  allowComments: boolean;
};
