import { SwitchButton } from '@/ui';
import styles from './HomeForm.module.scss';
import { useForm } from '@/utils/hooks/useForm';
import { RxCross2 } from 'react-icons/rx';
import { Typography } from '@/ui';
import { useState } from 'react';

export const HomeForm = () => {
  const { form, formHide } = useForm();
  const [isSubmit, setSubmit] = useState(false);

  const onSubmit = (event) => {
    // preventDefault - заглушка
    // event.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      {isSubmit ? (
        <p>accept</p>
      ) : form ? (
        <section className={styles.formBg}>
          <form className={styles.form}>
            <article className={styles.titleBlock}>
              <Typography variant='h2' className={styles.title}>
                Задать вопрос
              </Typography>
              <RxCross2
                color='#FF6600'
                size={25}
                onClick={formHide}
                className={styles.cross}
              />
            </article>
            <input
              type='text'
              className={styles.name}
              placeholder='Как к вам обращаться?'
            />
            <input
              type='number'
              className={styles.phone}
              placeholder='+996 (___) ___ ___ ___'
            />
            <textarea
              name='Введите текст'
              className={styles.comment}
            ></textarea>
            <article className={styles.checkboxContainer}>
              <input type='checkbox' className={styles.checkbox} />
              <label htmlFor='checkbox' className={styles.checkboxLabel}>
                Я принимаю условия пользовательского соглашения
              </label>
            </article>
            <SwitchButton className={styles.sendBtn} onClick={onSubmit}>
              Отправить
            </SwitchButton>
          </form>
        </section>
      ) : (
        false
      )}
    </>
  );
};
