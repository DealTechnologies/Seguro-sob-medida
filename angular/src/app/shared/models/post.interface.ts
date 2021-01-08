import { User } from './user.interface';
import { Comment } from './comment.interface';

export interface Post {
    user: User;
    description: string;
    img: string;
}
