import styles from './quiz-results.module.scss';
import { FC } from 'react';
import {
  IdUserAnswer,
  isUserAnswerCorrect,
  Question,
  QuestionId,
  UserAnswer,
} from '@siphox-quiz/common';
import clsx from 'clsx';

export interface QuizResultsProps {
  questions: Question[];
  userAnswers: Record<QuestionId, UserAnswer>;
}

export const QuizResults: FC<QuizResultsProps> = ({
  questions,
  userAnswers,
}) => {
  const renderRow = ({ id, question, correctAnswer, answerType }: Question) => {
    const userAnswer = userAnswers[id];
    const isCorrect =
      !!userAnswer?.value &&
      isUserAnswerCorrect(userAnswer.value, correctAnswer, answerType);

    return (
      <tr
        className={clsx({
          [styles.rowCorrect]: isCorrect,
          [styles.rowIncorrect]: !isCorrect,
        })}
        key={id}
      >
        <td>{question}</td>
        <td>{userAnswer.value?.toString() ?? userAnswer.status}</td>
        <td>{isCorrect ? '' : correctAnswer?.toString()}</td>
      </tr>
    );
  };

  return (
    <div className={styles.root}>
      <h3>Results</h3>

      <table className={styles.table}>
        <tr>
          <th>Question</th>
          <th>Your answer</th>
          <th>Correct answer</th>
        </tr>
        {questions.map(renderRow)}
      </table>
    </div>
  );
};
