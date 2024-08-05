import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { Progress } from '../progress';
import { Quiz } from '../quiz';
import { Question, QuestionId, UserAnswer } from '@siphox-quiz/common';

export interface QuizEngineProps {
  questions: Question[];
}

export const QuizEngine: FC<QuizEngineProps> = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState<
    Record<QuestionId, UserAnswer>
  >({});

  const onUserAction = (id: QuestionId, answer: UserAnswer) => {
    console.log(id, answer);

    setUserAnswers((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        ...answer,
      },
    }));
  };

  useLayoutEffect(() => {
    setUserAnswers({});
  }, [questions]);

  return (
    <div>
      <Progress userAnswers={userAnswers} questions={questions} />

      <section>
        <Quiz
          questions={questions}
          userAnswers={userAnswers}
          onUserAction={onUserAction}
        />
      </section>
    </div>
  );
};
