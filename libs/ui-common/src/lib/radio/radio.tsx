import { FC } from 'react';
import { BaseInput, BaseInputSharedProps } from '../base-input';
import styles from './radio.module.scss';

export type RadioProps = BaseInputSharedProps;

export const Radio: FC<RadioProps> = (props) => (
  <BaseInput {...props} type="radio" classNameBox={styles.radio} />
);
