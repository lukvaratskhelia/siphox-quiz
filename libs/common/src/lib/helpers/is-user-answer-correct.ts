import { Answer, AnswerId } from '../types';
import { IdAnswerType } from '../constants';

const isCorrectFreeText = (userAnswer: Answer, correctAnswer: Answer) =>
  userAnswer === correctAnswer;

const isCorrectSingle = (userAnswer: Answer, correctAnswer: Answer) =>
  JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);

const isCorrectMulti = (userAnswer: Answer, correctAnswer: Answer) =>
  JSON.stringify((userAnswer as AnswerId[]).sort()) ===
  JSON.stringify((correctAnswer as AnswerId[]).sort());

const comparatorConfig = new Map<
  IdAnswerType,
  <T extends Answer = Answer>(userAnswer: T, correctAnswer: T) => boolean
>([
  [IdAnswerType.Single, isCorrectSingle],
  [IdAnswerType.Multi, isCorrectMulti],
  [IdAnswerType.FreeText, isCorrectFreeText],
]);

export const isUserAnswerCorrect = (
  userAnswer: Answer,
  correctAnswer: Answer,
  type: IdAnswerType
) => {
  return comparatorConfig.get(type)?.(userAnswer, correctAnswer) ?? false;
};
