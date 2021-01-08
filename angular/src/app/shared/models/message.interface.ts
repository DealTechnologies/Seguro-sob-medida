import {User} from "./user.interface";

export interface Message {
  user: User;
  description: string;
  time: string | Date;
}
