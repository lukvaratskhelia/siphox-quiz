import { FC } from 'react';
import { Link } from 'react-router-dom';
import { QuizConfig, quizConfig } from '../../quiz-config';
import styles from './home-page.module.scss';

export const HomePage: FC = () => {
  const renderQuizLink = ({ key }: QuizConfig) => (
    <Link to={`/quiz/${key}`}>
      <a>{key}</a>
    </Link>
  );

  return (
    <div className={styles.root}>
      <h1>Quiz Engine</h1>

      <p>Select quiz to start:</p>

      <div className={styles.links}>{quizConfig.map(renderQuizLink)}</div>
    </div>
  );
};
