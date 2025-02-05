import { SwitchButton } from '@/ui';
import styles from './PagesForm.module.scss';
import { useForm } from '@/utils/hooks/useForm';
import { RxCross2 } from 'react-icons/rx';
import { Typography } from '@/ui';
import { useState } from 'react';
import { RiAsterisk } from 'react-icons/ri';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import * as Yup from 'yup';
import { CRMRequest } from '../api/CRMRequest';
import { AcceptModal } from '../ui/AcceptModal';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  phone: Yup.string().required('Обязательное поле'),
  theme: Yup.string().required('бязательное поле'),
  message: Yup.string().required('Обязательное поле'),
  confPolicy: Yup.bool().oneOf(
    [true],
    'Вы должны принять условия пользовательского соглашения',
  ),
});

export const PagesForm = () => {
  const { form, formHide } = useForm();
  const [isSubmit, setSubmit] = useState(false);
  // начальное состояние валидации
  const [values, setValues] = useState({
    name: '',
    phone: '',
    message: '',
    theme: '',
    confPolicy: false,
  });
  const [errors, setErrors] = useState({});
  const [acceptModal, setAcceptModal] = useState();

  const validate = async () => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // Убираем ошибку для текущего поля при вводе
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handlePhoneChange = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      phone: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: undefined,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const { fetchRequest } = CRMRequest();

  const onSubmit = async (event) => {
    event.preventDefault();
    const isValid = await validate();
    if (isValid)
      return (
        setSubmit(true), setAcceptModal(true), console.log('Form data sended ☑')
      );
    const formData = {
      name: values.name,
      phone: values.phone,
      message: values.message,
      policy: values.confPolicy,
      theme: values.theme,
    };
    fetchRequest(formData);
  };
  return (
    <>
      {isSubmit ? (
        acceptModal && <AcceptModal />
      ) : form ? (
        <section className={styles.formBg}>
          <form className={styles.form} onSubmit={onSubmit}>
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
                name='name'
                placeholder='Как к вам обращаться?'
                className={`${styles.name} ${errors.name ? styles.error : ''}`}
                value={values.name}
                onChange={handleChange}
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
              <PhoneInput
                country={'kg'}
                className={`${styles.phoneInput} ${
                  errors.phone ? styles.error : ''
                }`}
                value={values.phone}
                onChange={handlePhoneChange}
              />
            </article>
            <article className={styles.inputContainer}>
              <div className={styles.inputTitle}>
                <Typography variant='fs16'>Тема</Typography>
                <RiAsterisk
                  color='red'
                  size={'10px'}
                  className={styles.asterisk}
                />
              </div>
              <input
                type='text'
                name='theme'
                placeholder='Тема'
                className={`${styles.theme} ${
                  errors.theme ? styles.error : ''
                }`}
                value={values.theme}
                onChange={handleChange}
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
                name='message'
                className={`${styles.comment} ${
                  errors.message ? styles.error : ''
                }`}
                value={values.message}
                onChange={handleChange}
              ></textarea>
            </article>
            <article className={styles.checkboxContainer}>
              <label htmlFor='checkbox' className={styles.checkbox}>
                <input
                  type='checkbox'
                  name='confPolicy'
                  id='checkbox'
                  className={`${styles.checkboxInput} ${
                    errors.confPolicy ? styles.error : ''
                  }`}
                  checked={values.confPolicy}
                  onChange={handleCheckboxChange}
                  readOnly
                />
                <div className={styles.checkboxCustom}></div>
                <span className={styles.checkboxLabel}>
                  Я принимаю условия пользовательского соглашения
                </span>
              </label>
            </article>
            {errors.confPolicy && (
              <aside className={styles.confPolicy_errorMessage}>
                {errors.confPolicy}
              </aside>
            )}
            <SwitchButton maxWidth='191px' className={styles.sendBtn}>
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
