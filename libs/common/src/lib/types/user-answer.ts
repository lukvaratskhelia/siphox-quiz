import { IdUserAnswer } from '../constants';
import { Answer } from './answer';

export interface UserAnswer {
  value?: Answer;
  status: IdUserAnswer;
}
