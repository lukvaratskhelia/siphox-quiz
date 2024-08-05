import { Answer } from '../types';

export const sanitizeAnswer = <T extends Answer>(answer: T): T => {
  if (typeof answer === 'string') {
    return answer.trim() as T;
  }

  return answer;
};
