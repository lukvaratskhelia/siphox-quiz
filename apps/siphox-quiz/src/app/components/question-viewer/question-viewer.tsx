import { FC, FormEvent, Fragment, useEffect, useState } from 'react';
import { Answer, AnswerId, IdAnswerType, Question } from '@siphox-quiz/common';
import styles from './question-viewer.module.scss';
import { Button, Checkbox, Radio, Textfield } from '@siphox-quiz/ui-common';
import clsx from 'clsx';
import parse from 'html-react-parser';

export interface QuestionProps
  extends Pick<
    Question,
    | 'id'
    | 'title'
    | 'question'
    | 'answerType'
    | 'answerOptions'
    | 'description'
    | 'image'
  > {
  onAnswer: (answer: Answer) => void;
}

const optionsWithAnswers = new Set<IdAnswerType>([
  IdAnswerType.Single,
  IdAnswerType.Multi,
]);

const optionsWithText = new Set<IdAnswerType>([IdAnswerType.FreeText]);

const defaultValueConfig: Record<IdAnswerType, Answer> = {
  [IdAnswerType.Single]: '',
  [IdAnswerType.Multi]: [],
  [IdAnswerType.FreeText]: '',
};

export const QuestionViewer: FC<QuestionProps> = ({
  answerOptions,
  answerType,
  description,
  image,
  title,
  question,
  onAnswer,
  id,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | undefined>(
    defaultValueConfig[answerType]
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (selectedAnswer !== undefined) {
      onAnswer(selectedAnswer);
    }
    setShouldAnimate(true);
  };

  const onChangeRadio = (newValue?: AnswerId) => {
    setSelectedAnswer(newValue as AnswerId);
  };

  const onChangeCheckbox = (value: AnswerId, newValue?: AnswerId) => {
    if (newValue) {
      setSelectedAnswer((prev) => [...(prev as AnswerId[]), newValue]);
    } else {
      setSelectedAnswer((prev) =>
        (prev as AnswerId[]).filter((v) => v !== value)
      );
    }
  };

  useEffect(() => {
    setSelectedAnswer(defaultValueConfig[answerType]);
  }, [id, answerType]);

  return (
    <section
      className={clsx({
        [styles.rootAnimated]: shouldAnimate,
      })}
      onAnimationEnd={() => setShouldAnimate(false)}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        {question && <h1 className={styles.question}>{parse(question)}</h1>}
        {title && <h2 className={styles.title}>{parse(title)}</h2>}
        {description && (
          <p className={styles.description}>{parse(description)}</p>
        )}
        {image && (
          <div>
            <img className={styles.image} src={image.src} alt={image.alt} />
          </div>
        )}
        <div className={clsx(styles.answers, styles.answersVertical)}>
          {optionsWithAnswers.has(answerType) &&
            answerOptions?.map(({ value, label }) => (
              <Fragment key={value?.toString()}>
                {answerType === IdAnswerType.Single && (
                  <Radio
                    id={value?.toString()}
                    name={id}
                    isChecked={selectedAnswer === value}
                    value={value}
                    label={label}
                    onChange={onChangeRadio}
                  />
                )}
                {answerType === IdAnswerType.Multi && (
                  <Checkbox
                    id={value?.toString()}
                    name={id}
                    value={value}
                    label={label}
                    isChecked={
                      Array.isArray(selectedAnswer) &&
                      selectedAnswer.includes(value)
                    }
                    onChange={(newValue) => onChangeCheckbox(value, newValue)}
                  />
                )}
              </Fragment>
            ))}

          {optionsWithText.has(answerType) &&
            typeof selectedAnswer === 'string' && (
              <Textfield
                placeholder="Enter your answer"
                value={selectedAnswer}
                onChange={(value) => setSelectedAnswer(value)}
              />
            )}
        </div>
        <footer className={styles.footer}>
          <Button
            label="Next"
            isDisabled={
              selectedAnswer === '' ||
              (Array.isArray(selectedAnswer) && selectedAnswer.length === 0)
            }
            type="submit"
          />
        </footer>
      </form>
    </section>
  );
};
