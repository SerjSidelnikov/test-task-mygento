import React from 'react';
import cn from 'classnames';

import PaperClipIcon from '@/common/assets/image/svg/paper-clip.svg';
import CloseIcon from '@/common/assets/image/svg/close.svg';

import classes from './UploadFile.module.css';

interface Props {
  className?: string;
  value?: string | undefined;
  onChange: (value: string) => void;
  onDelete: () => void;
}

const UploadFile: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(({ className, value, onChange, onDelete }, ref) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;

    if (files && files.length) {
      onChange(files[0].name);
    }
  };

  return (
    <div className={cn(classes.container, className)}>
      <input
        ref={ref}
        onChange={handleChange}
        className={cn('visually-hidden', classes.input)}
        id="file"
        type="file"
      />

      {value ? (
        <p className={classes.file} tabIndex={0}>
          <PaperClipIcon />

          <span>{value}</span>

          <button
            onClick={onDelete}
            type="button"
            className={classes.remove}
            title="Удалить"
          >
            <CloseIcon />
          </button>
        </p>
      ) : (
        <label htmlFor="file" className={classes.label}>
          <span className={cn('icon-plus', classes.icon)} />
          <span>Загрузить резюме</span>
        </label>
      )}
    </div>
  );
});

export default UploadFile;
