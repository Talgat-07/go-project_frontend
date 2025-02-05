import { useState } from 'react';
import styles from './AcceptModal.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { Typography } from '@/ui';

export const AcceptModal = () => {
  const [acceptModal, setAcceptModal] = useState(true);

  const closeAcceptModal = () => setAcceptModal(false);

  return (
    <>
      {acceptModal && (
        <section className={styles.acceptModalBg}>
          <div className={styles.acceptModal}>
            <RxCross2
              color='#FF6600'
              size={25}
              onClick={closeAcceptModal}
              className={styles.acceptCross}
            />
            <div className={styles.loader} />
            <Typography variant='fs24' className={styles.acceptTitle}>
              Успешно отправлено
            </Typography>
          </div>
        </section>
      )}
    </>
  );
};
