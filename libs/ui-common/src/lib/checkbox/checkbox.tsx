import { FC } from 'react';
import { BaseInput, BaseInputSharedProps } from '../base-input';

export type CheckboxProps = BaseInputSharedProps;

export const Checkbox: FC<CheckboxProps> = (props) => (
  <BaseInput {...props} type="checkbox" />
);
