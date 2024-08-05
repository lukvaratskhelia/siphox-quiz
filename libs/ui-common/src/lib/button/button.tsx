import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  label: string;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({
  label,
  isDisabled = false,
  onClick,
  type,
}) => {
  return (
    <button
      role="button"
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx({
        [styles.root]: true,
      })}
    >
      {label}
    </button>
  );
};
