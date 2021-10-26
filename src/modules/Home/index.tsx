import React from 'react';

const HomePage: React.FC = () => {
  return (
    <section>
      <h1>Анкета соискателя</h1>

      <form>
        <fieldset>
          <legend>Личные данные</legend>

          <div>
            <p>
              Имя <sup>*</sup>
            </p>

            <input type="text" placeholder="Имя" />

            <p>В имени могут быть только буквы</p>
          </div>

          <div>
            <p>
              Фамилия <sup>*</sup>
            </p>

            <input type="text" placeholder="Фамилия" />

            <p>В имени могут быть только буквы</p>
          </div>

          <div>
            <p>
              Электронная почта <sup>*</sup>
            </p>

            <input type="email" placeholder="Электронная почта" />

            <p>В имени могут быть только буквы</p>
          </div>

          <div>
            <button type="button">Загрузить резюме</button>
            <input type="file" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Пол *</legend>

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

        <fieldset>
          <legend>Github</legend>

          <div>
            <p>
              Вставьте ссылку на Github <sup>*</sup>
            </p>

            <input type="text" placeholder="Вставьте ссылку на Github" />

            <p>В имени могут быть только буквы</p>
          </div>
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
