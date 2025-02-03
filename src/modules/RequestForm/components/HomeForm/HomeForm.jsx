import { SwitchButton } from '@/ui';
import styles from './HomeForm.module.scss';
import { useForm } from '@/utils/hooks/useForm';
import { RxCross2 } from 'react-icons/rx';
import { Typography } from '@/ui';
import { useState } from 'react';
import { RiAsterisk } from 'react-icons/ri';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export const HomeForm = () => {
  const { form, formHide } = useForm();
  const [isSubmit, setSubmit] = useState(false);
  const [value, setValue] = useState('+7');
  const [acceptModal, setAcceptModal] = useState(false);

  const onSubmit = (event) => {
    // preventDefault - заглушка
    // event.preventDefault();
    setValue(event.target.value);
    setSubmit(true);
    setAcceptModal(true);
  };

  const closeAcceptModal = () => setAcceptModal(false);

  return (
    <>
      {isSubmit ? (
        acceptModal && (
          <section className={styles.acceptModalBg}>
            <div className={styles.acceptModal}>
              <RxCross2
                color='#FF6600'
                size={25}
                onClick={closeAcceptModal}
                className={styles.cross}
              />
            </div>
          </section>
        )
      ) : form ? (
        <section className={styles.formBg}>
          <form className={styles.form}>
            <aside className={styles.titleBlock}>
              <Typography variant='h2' className={styles.title}>
                Задать вопрос
              </Typography>
              <RxCross2
                color='#FF6600'
                size={25}
                onClick={formHide}
                className={styles.cross}
              />
            </aside>
            <article className={styles.inputContainer}>
              <div className={styles.inputTitle}>
                <Typography variant='fs16'>Имя</Typography>
                <RiAsterisk
                  color='red'
                  size={'10px'}
                  className={styles.asterisk}
                />
              </div>
              <input
                type='text'
                className={styles.name}
                placeholder='Как к вам обращаться?'
                required
              />
            </article>
            <article className={styles.inputContainer}>
              <div className={styles.inputTitle}>
                <Typography variant='fs16'>Телефон</Typography>
                <RiAsterisk
                  color='red'
                  size={'10px'}
                  className={styles.asterisk}
                />
              </div>
              {/* <input
                type='number'
                className={styles.phone}
                placeholder='+996 (___) ___ ___ ___'
              /> */}
              <PhoneInput
                country={'ru'}
                className={styles.phoneInput}
                value={value}
                onChange={(value) => setValue(value)}
                required
              />
            </article>
            <article className={styles.inputContainer}>
              <div className={styles.inputTitle}>
                <Typography variant='fs16'>Сообщение</Typography>
                <RiAsterisk
                  color='red'
                  size={'10px'}
                  className={styles.asterisk}
                />
              </div>
              <textarea
                name='Введите текст'
                className={styles.comment}
                required
              ></textarea>
            </article>
            <article className={styles.checkboxContainer}>
              <label htmlFor='checkbox' className={styles.checkbox}>
                <input
                  type='checkbox'
                  id='checkbox'
                  className={styles.checkboxInput}
                  required
                  readOnly
                />
                <div className={styles.checkboxCustom}></div>
                <span className={styles.checkboxLabel}>
                  Я принимаю условия пользовательского соглашения
                </span>
              </label>
            </article>
            <SwitchButton
              maxWidth='191px'
              className={styles.sendBtn}
              onClick={onSubmit}
            >
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
