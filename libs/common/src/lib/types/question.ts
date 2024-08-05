import { IdAnswerType } from '../constants';
import { AnswerOption } from './answer-option';
import { QuestionSkipStrategy } from './question-skip-strategy';
import { QuestionId } from './question-id';
import { Answer } from './answer';

export interface QuestionImage {
  src: string;
  alt: string;
}

export interface Question {
  id: QuestionId;
  question: string;
  correctAnswer: Answer;
  image?: QuestionImage;
  title?: string;
  description?: string;
  answerType: IdAnswerType;
  answerOptions?: AnswerOption[];
  skipStrategy?: QuestionSkipStrategy;
}
