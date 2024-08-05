import { FC, useEffect, useState } from 'react';
import {
  Answer,
  IdUserAnswer,
  isUserAnswerMatch,
  Question,
  QuestionId,
  sanitizeAnswer,
  UserAnswer,
} from '@siphox-quiz/common';
import { QuestionViewer } from '../question-viewer/question-viewer';
import styles from './quiz.module.scss';
import { QuizResults } from '../quiz-results';

export interface QuizProps {
  questions: Question[];
  userAnswers: Record<QuestionId, UserAnswer>;
  onUserAction: (questionId: QuestionId, answer: UserAnswer) => void;
}

export const Quiz: FC<QuizProps> = ({
  questions,
  userAnswers,
  onUserAction,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shouldShowResults, setShouldShowResults] = useState(false);

  const {
    question,
    image,
    answerType,
    answerOptions,
    id,
    description,
    title,
    skipStrategy,
  } = questions[currentQuestionIndex];

  const goToNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShouldShowResults(true);
    }
  };

  const onAnswer = (answer: Answer) => {
    const sanitizedAnswer = sanitizeAnswer(answer);

    onUserAction(id, {
      value: sanitizedAnswer,
      status: IdUserAnswer.Answered,
    });

    goToNextQuestion();
  };

  useEffect(() => {
    onUserAction(id, { status: IdUserAnswer.InProgress });
  }, [id]);

  useEffect(() => {
    if (skipStrategy) {
      const { questionId, answerRelation, answerValue } = skipStrategy;
      const targetQuestionAnswer = userAnswers[questionId]?.value;

      if (
        targetQuestionAnswer === undefined ||
        isUserAnswerMatch(targetQuestionAnswer, answerValue, answerRelation)
      ) {
        onUserAction(id, { status: IdUserAnswer.Skipped });
        goToNextQuestion();
      }
    }
  }, [id, skipStrategy]);

  if (shouldShowResults) {
    return (
      <div className={styles.root}>
        <QuizResults userAnswers={userAnswers} questions={questions} />
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <QuestionViewer
        id={id}
        question={question}
        answerType={answerType}
        answerOptions={answerOptions}
        image={image}
        title={title}
        description={description}
        onAnswer={onAnswer}
      />
    </div>
  );
};
