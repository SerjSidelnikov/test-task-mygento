import React from 'react';

import Input from '@/common/components/Input';

import classes from './Home.module.css';

const HomePage: React.FC = () => {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Анкета соискателя</h1>

      <form className={classes.form}>
        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Личные данные</legend>

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

          <div>
            <label htmlFor="file">Загрузить резюме</label>
            <input className="visually-hidden" id="file" type="file" />
          </div>
        </fieldset>

        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Пол *</legend>

          <div>
            <label>
              <input type="radio" name="gender" value="male" />
              <p>Мужской</p>
            </label>

            <label>
              <input type="radio" name="gender" value="female" />
              <p>Женский</p>
            </label>
          </div>
        </fieldset>

        <fieldset className={classes.form_group}>
          <legend className={classes.form_group_name}>Github</legend>

          <Input
            label="Вставьте ссылку на Github"
            type="text"
            placeholder="Вставьте ссылку на Github"
            value=""
            onChange={() => {}}
          />
        </fieldset>

        <label>
          <input type="checkbox" name="agree" />
          <p>
            <sup>*</sup> Я согласен с{' '}
            <a href="/">политикой конфиденциальности</a>
          </p>
        </label>

        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};

export default HomePage;
