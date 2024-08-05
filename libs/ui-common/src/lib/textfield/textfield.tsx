import { FC } from 'react';
import styles from './textfield.module.scss';

export interface TextfieldProps {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Textfield: FC<TextfieldProps> = ({
  name,
  placeholder,
  value = '',
  onChange,
}) => {
  return (
    <input
      className={styles.root}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
