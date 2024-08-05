import { QuestionId } from './question-id';
import { IdAnswerRelation } from '../constants';

export interface QuestionSkipStrategy {
  questionId: QuestionId;
  answerRelation: IdAnswerRelation;
  answerValue: string;
}
