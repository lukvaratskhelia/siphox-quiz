import { isUserAnswerCorrect } from '.';
import { IdAnswerType } from '../constants';

describe('function isUserAnswerCorrect', () => {
  it('should correctly return if user answer is correct for free text', () => {
    expect(isUserAnswerCorrect('text', 'text', IdAnswerType.FreeText)).toEqual(
      true
    );
    expect(isUserAnswerCorrect('text', 'other', IdAnswerType.FreeText)).toEqual(
      false
    );
  });

  it('should correctly return if user answer is correct for Single type', () => {
    expect(isUserAnswerCorrect('text', 'text', IdAnswerType.Single)).toEqual(
      true
    );
    expect(isUserAnswerCorrect('text', 'other', IdAnswerType.FreeText)).toEqual(
      false
    );
  });

  it('should correctly return if user answer is correct for Multi type', () => {
    expect(isUserAnswerCorrect(['text'], ['text'], IdAnswerType.Multi)).toEqual(
      true
    );
    expect(
      isUserAnswerCorrect(['text'], ['other'], IdAnswerType.Multi)
    ).toEqual(false);
    expect(
      isUserAnswerCorrect(
        ['text', 'text-2'],
        ['text-2', 'text'],
        IdAnswerType.Multi
      )
    ).toEqual(true);
    expect(
      isUserAnswerCorrect(
        ['text', 'text-2', 'text-3'],
        ['text-2', 'text'],
        IdAnswerType.Multi
      )
    ).toEqual(false);
    expect(
      isUserAnswerCorrect(
        ['text-2', 'text'],
        ['text', 'text-2', 'text-3'],
        IdAnswerType.Multi
      )
    ).toEqual(false);
  });
});
