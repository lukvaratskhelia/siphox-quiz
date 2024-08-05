import { AnswerId } from '@siphox-quiz/common';
import { FC } from 'react';
import styles from './base-input.module.scss';
import clsx from 'clsx';

export interface BaseInputInternalProps {
  type: 'checkbox' | 'radio';
  className?: string;
  classNameInput?: string;
  classNameBox?: string;
}

export interface BaseInputSharedProps {
  id?: string;
  name?: string;
  value?: AnswerId;
  isChecked?: boolean;
  onChange?: (value: AnswerId | undefined) => void;
  label?: string;
}

export interface BaseInputProps
  extends BaseInputInternalProps,
    BaseInputSharedProps {}

export const BaseInput: FC<BaseInputProps> = ({
  id,
  type,
  name,
  label,
  value,
  isChecked,
  onChange,
  className,
  classNameInput,
  classNameBox,
}) => {
  return (
    <label htmlFor={id?.toString()} className={clsx(styles.root, className)}>
      <input
        id={id?.toString()}
        className={clsx(styles.input, classNameInput)}
        name={name?.toString()}
        type={type}
        value={value?.toString()}
        checked={isChecked as boolean}
        onChange={() => {
          onChange?.(isChecked ? undefined : value);
        }}
      />

      <div className={clsx(styles.box, classNameBox)}></div>

      {label && <span>{label}</span>}
    </label>
  );
};
