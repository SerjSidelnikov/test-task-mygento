import React from 'react';
import cn from 'classnames';

import Input from '@/common/components/Input';
import UploadFile from '@/common/components/UploadFile';
import RadioButton from '@/common/components/RadioButton';
import Checkbox from '@/common/components/Checkbox';
import Button from '@/common/components/Button';

import classes from './Home.module.css';

const HomePage: React.FC = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Анкета соискателя</h1>

      <form className={classes.form}>
        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Личные данные</legend>

          <div className={classes.input_group}>
            <Input
              label="Имя"
              type="text"
              placeholder="Имя"
              value=""
              onChange={() => {}}
              required
            />

            <Input
              label="Фамилия"
              type="text"
              placeholder="Фамилия"
              value=""
              onChange={() => {}}
              required
            />

            <Input
              label="Электронная почта"
              type="email"
              placeholder="Электронная почта"
              value=""
              onChange={() => {}}
              required
            />

            <UploadFile className={classes.file} />
          </div>
        </fieldset>

        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Пол *</legend>

          <div className={classes.radio_group}>
            <RadioButton
              label="Мужской"
              value="male"
              onChange={() => {}}
              name="gender"
            />

            <RadioButton
              label="Женский"
              value="female"
              onChange={() => {}}
              name="gender"
            />
          </div>
        </fieldset>

        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Github</legend>

          <Input
            className={cn(classes.input, classes.justifyStart)}
            label="Вставьте ссылку на Github"
            type="text"
            placeholder="Вставьте ссылку на Github"
            value=""
            onChange={() => {}}
          />
        </fieldset>

        <Checkbox
          value="agree"
          onChange={() => {}}
          name="agree"
          className={classes.justifyStart}
        >
          <sup>*</sup> Я согласен с <a href="/">политикой конфиденциальности</a>
        </Checkbox>

        <Button
          type="submit"
          className={cn(classes.buttonSubmit, classes.justifyStart)}
        >
          Отправить
        </Button>
      </form>
    </section>
  );
};

export default HomePage;
