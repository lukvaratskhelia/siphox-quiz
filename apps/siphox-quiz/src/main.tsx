import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './app/pages/home-page/home-page';
import { QuizPage } from './app/pages/quiz-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/quiz/:id', element: <QuizPage /> },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
