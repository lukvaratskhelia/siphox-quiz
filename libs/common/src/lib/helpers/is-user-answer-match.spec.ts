import { isUserAnswerMatch } from './is-user-answer-match';
import {
  Answer,
  AnswerId,
  IdAnswerRelation,
  IdAnswerType,
} from '@siphox-quiz/common';

describe('function isUserAnswerMatch', () => {
  const userAnswer: Answer = 'target-answer';
  const userAnswerMulti: Answer = ['target-answer', 'target-answer-2'];
  const targetAnswer: AnswerId = 'target-answer';
  const otherTargetAnswer: AnswerId = 'other-target-answer';

  it('should check equality matches correctly', () => {
    expect(
      isUserAnswerMatch(userAnswer, targetAnswer, IdAnswerRelation.Equals)
    ).toEqual(true);
    expect(
      isUserAnswerMatch(userAnswer, otherTargetAnswer, IdAnswerRelation.Equals)
    ).toEqual(false);
    expect(
      isUserAnswerMatch(userAnswer, targetAnswer, IdAnswerRelation.NotEquals)
    ).toEqual(false);
    expect(
      isUserAnswerMatch(
        userAnswer,
        otherTargetAnswer,
        IdAnswerRelation.NotEquals
      )
    ).toEqual(true);
  });

  it('should check include matches correctly', () => {
    expect(
      isUserAnswerMatch(
        userAnswerMulti,
        targetAnswer,
        IdAnswerRelation.Includes
      )
    ).toEqual(true);
    expect(
      isUserAnswerMatch(
        userAnswerMulti,
        otherTargetAnswer,
        IdAnswerRelation.Includes
      )
    ).toEqual(false);
    expect(
      isUserAnswerMatch(
        userAnswerMulti,
        targetAnswer,
        IdAnswerRelation.NotIncludes
      )
    ).toEqual(false);
    expect(
      isUserAnswerMatch(
        userAnswerMulti,
        otherTargetAnswer,
        IdAnswerRelation.NotIncludes
      )
    ).toEqual(true);
  });
});
