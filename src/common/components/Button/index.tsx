import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';

import classes from './Button.module.css';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<Props> = ({
  className,
  type = 'button',
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(classes.button, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
