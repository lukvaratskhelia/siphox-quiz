import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { quizConfig } from '../quiz-config';
import { QuizEngine } from '../components/quiz-engine/quiz-engine';

export const QuizPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const questions = quizConfig.find(({ key }) => key === id);

  if (!questions?.questions?.length) {
    return <></>;
  }

  return <QuizEngine questions={questions.questions} />;
};
