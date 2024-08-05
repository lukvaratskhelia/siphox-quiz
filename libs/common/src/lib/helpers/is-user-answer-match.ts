import { Answer, AnswerId } from '../types';
import { IdAnswerRelation } from '../constants';

export const isUserAnswerMatch = (
  userAnswer: Answer,
  targetAnswer: AnswerId,
  type: IdAnswerRelation
) => {
  if (type === IdAnswerRelation.Equals) {
    return userAnswer === targetAnswer;
  }
  if (type === IdAnswerRelation.NotEquals) {
    return userAnswer !== targetAnswer;
  }
  if (type === IdAnswerRelation.Includes && Array.isArray(userAnswer)) {
    return userAnswer.includes(targetAnswer);
  }
  if (type === IdAnswerRelation.NotIncludes && Array.isArray(userAnswer)) {
    return !userAnswer.includes(targetAnswer);
  }
};
