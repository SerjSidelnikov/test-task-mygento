import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import cn from 'classnames';

import Input from '@/common/components/Input';
import UploadFile from '@/common/components/UploadFile';
import RadioButton from '@/common/components/RadioButton';
import Checkbox from '@/common/components/Checkbox';
import Button from '@/common/components/Button';
import Modal from '@/common/components/Modal';
import ModalPrivacyPolicy from '@/common/components/ModalPrivacyPolicy';

import classes from './Home.module.css';

interface IForm {
  name: '';
  surname: string;
  email: string;
  file?: string;
  githubLink?: string;
}

const HomePage: React.FC = () => {
  const [isShowModalSuccess, setIsShowModalSuccess] =
    React.useState<boolean>(false);
  const [isShowModalPrivacyPolicy, setIsShowModalPrivacyPolicy] =
    React.useState<boolean>(false);
  /*
   * Была бага с отчисткой полей (не успевал разобраться),
   * поэтому вынес в отдельный стейт из обработки формы.
   */
  const [gender, setGender] = React.useState<string>('');
  const [agree, setAgree] = React.useState<boolean>(false);

  const defaultValues: IForm = {
    name: '',
    surname: '',
    email: '',
    file: '',
    githubLink: '',
  };

  const regexIncludesNumber = /\d/;

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Пожалуйста, укажите имя')
      .test('name', 'В имени могут быть только буквы', (value = '') => {
        regexIncludesNumber.lastIndex = 0;
        return !regexIncludesNumber.test(value);
      }),
    surname: yup
      .string()
      .required('Пожалуйста, укажите фамилию')
      .test('surname', 'В фамилии могут быть только буквы', (value = '') => {
        regexIncludesNumber.lastIndex = 0;
        return !regexIncludesNumber.test(value);
      }),
    email: yup
      .string()
      .email('Невалидный email')
      .required('Пожалуйста, укажите электронную почту'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    reset,
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const userName = watch('name');

  const isDisabledButtonSubmit = !isValid || !agree || !gender;

  const onSubmit: SubmitHandler<IForm> = (): void => {
    setIsShowModalSuccess(true);
  };

  const handleDeleteFile = (): void => {
    setValue('file', '');
  };

  const handleChangeGender = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setGender(event.target.value);
  };

  const handleChangeAgree = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setAgree(event.target.checked);
  };

  const handleCloseModalSuccess = (): void => {
    setIsShowModalSuccess(false);
    reset(defaultValues);
    setAgree(false);
    setGender('');
  };

  const handleShowModalPrivacyPolicy = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    event.preventDefault();
    setIsShowModalPrivacyPolicy(true);
  };

  const handleCloseModalPrivacyPolicy = (): void => {
    setIsShowModalPrivacyPolicy(false);
  };

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Анкета соискателя</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Личные данные</legend>

          <div className={classes.input_group}>
            <Controller
              render={({ field }) => (
                <Input
                  {...field}
                  label="Имя"
                  type="text"
                  placeholder="Имя"
                  errorMessage={errors.name?.message}
                  required
                />
              )}
              name="name"
              control={control}
            />

            <Controller
              render={({ field }) => (
                <Input
                  {...field}
                  label="Фамилия"
                  type="text"
                  placeholder="Фамилия"
                  errorMessage={errors.surname?.message}
                  required
                />
              )}
              name="surname"
              control={control}
            />

            <Controller
              render={({ field }) => (
                <Input
                  {...field}
                  label="Электронная почта"
                  type="email"
                  placeholder="Электронная почта"
                  errorMessage={errors.email?.message}
                  required
                />
              )}
              name="email"
              control={control}
            />

            <Controller
              render={({ field }) => (
                <UploadFile
                  {...field}
                  onDelete={handleDeleteFile}
                  className={classes.file}
                />
              )}
              name="file"
              control={control}
            />
          </div>
        </fieldset>

        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Пол *</legend>

          <div className={classes.radio_group}>
            <RadioButton
              onChange={handleChangeGender}
              checked={gender === 'male'}
              label="Мужской"
              value="male"
              name="gender"
            />

            <RadioButton
              onChange={handleChangeGender}
              checked={gender === 'female'}
              label="Женский"
              value="female"
              name="gender"
            />
          </div>
        </fieldset>

        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Github</legend>

          <Controller
            render={({ field }) => (
              <Input
                {...field}
                className={cn(classes.input, classes.justifyStart)}
                label="Вставьте ссылку на Github"
                type="text"
                placeholder="Вставьте ссылку на Github"
              />
            )}
            name="githubLink"
            control={control}
          />
        </fieldset>

        <Checkbox
          checked={agree}
          onChange={handleChangeAgree}
          name="agree"
          className={classes.justifyStart}
          required
        >
          <sup>*</sup> Я согласен с{' '}
          <a href="" onClick={handleShowModalPrivacyPolicy}>
            политикой конфиденциальности
          </a>
        </Checkbox>

        <Button
          type="submit"
          className={cn(classes.buttonSubmit, classes.justifyStart)}
          disabled={isDisabledButtonSubmit}
        >
          Отправить
        </Button>
      </form>

      <CSSTransition
        in={isShowModalSuccess}
        appear
        timeout={350}
        unmountOnExit
        classNames="show"
      >
        <Modal
          title={`Спасибо ${userName}!`}
          onClose={handleCloseModalSuccess}
          renderFooter={() => (
            <Button
              onClick={handleCloseModalSuccess}
              className={classes.btnModal}
              type="button"
            >
              Понятно
            </Button>
          )}
        >
          <p className={classes.alignCenter}>Мы скоро свяжемся с вами</p>
        </Modal>
      </CSSTransition>

      <CSSTransition
        in={isShowModalPrivacyPolicy}
        appear
        timeout={350}
        unmountOnExit
        classNames="show"
      >
        <ModalPrivacyPolicy onClose={handleCloseModalPrivacyPolicy} />
      </CSSTransition>
    </section>
  );
};

export default HomePage;
