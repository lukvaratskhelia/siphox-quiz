import { Question } from '@siphox-quiz/common';
import quizFeatures from './json/quiz-features.json';
import quizMath from './json/quiz-math.json';

export interface QuizConfig {
  key: string;
  questions: Question[];
}

export const quizConfig: QuizConfig[] = [
  { key: 'features', questions: quizFeatures.questions as Question[] },
  { key: 'math', questions: quizMath.questions as Question[] },
];
