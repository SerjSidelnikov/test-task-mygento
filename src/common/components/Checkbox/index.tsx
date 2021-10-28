import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import CheckIcon from '@/common/assets/image/svg/check.svg';

import classes from './Checkbox.module.css';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(
  ({ className, label, onChange, name, checked, children, ...props }, ref) => {
    return (
      <label className={cn(classes.container, className)}>
        <input
          {...props}
          ref={ref}
          className={cn('visually-hidden', classes.input)}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          name={name}
        />
        <span className={classes.checkbox}>
          <CheckIcon />
        </span>
        <p className={classes.label}>{children || label}</p>
      </label>
    );
  },
);

export default Checkbox;
