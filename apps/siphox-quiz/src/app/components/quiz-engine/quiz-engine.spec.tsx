import { render } from '@testing-library/react';
import { QuizEngine } from './quiz-engine';
import { quizConfig } from '../../quiz-config';

describe('QuizEngine', () => {
  it('should render correctly', () => {
    const { baseElement } = render(
      <QuizEngine questions={quizConfig[0].questions} />
    );
    expect(baseElement).toBeTruthy();
  });
});
