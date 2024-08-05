import { FC } from 'react';
import {
  IdUserAnswer,
  isUserAnswerCorrect,
  Question,
  QuestionId,
  UserAnswer,
} from '@siphox-quiz/common';
import clsx from 'clsx';
import styles from './progress.module.scss';

export interface ProgressProps {
  questions: Question[];
  userAnswers: Record<QuestionId, UserAnswer>;
}

export const Progress: FC<ProgressProps> = ({ questions, userAnswers }) => {
  const segmentWidth = `${100 / questions.length}%`;

  const renderSegment = (question: Question) => {
    const userAnswer = userAnswers[question.id];
    const isCorrectAnswer =
      userAnswer?.value &&
      isUserAnswerCorrect(
        userAnswer.value,
        question.correctAnswer,
        question.answerType
      );

    return (
      <div
        key={question.id}
        className={clsx({
          [styles.segment]: true,
          [styles.segmentAnsweredCorrect]:
            userAnswer?.status === IdUserAnswer.Answered && isCorrectAnswer,
          [styles.segmentAnsweredWrong]:
            userAnswer?.status === IdUserAnswer.Answered && !isCorrectAnswer,
          [styles.segmentInProgress]:
            userAnswer?.status === IdUserAnswer.InProgress,
          [styles.segmentSkipped]: userAnswer?.status === IdUserAnswer.Skipped,
        })}
        style={{
          width: segmentWidth,
        }}
      />
    );
  };

  return <div className={styles.root}>{questions.map(renderSegment)}</div>;
};
