import React from 'react';
import cn from 'classnames';

import PaperClipIcon from '@/common/assets/image/svg/paper-clip.svg';
import CloseIcon from '@/common/assets/image/svg/close.svg';

import classes from './UploadFile.module.css';

interface Props {
  className?: string;
  onChange: (value: string) => void;
}

const UploadFile: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(({ className, onChange }, ref) => {
  const [file, setFile] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;

    if (files && files.length) {
      setFile(files[0].name);
      onChange(files[0].name);
    }
  };

  const handleRemoveFile = (): void => {
    setFile('');
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

      {file ? (
        <p className={classes.file} tabIndex={0}>
          <PaperClipIcon />

          <span>{file}</span>

          <button
            onClick={handleRemoveFile}
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
