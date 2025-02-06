import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { SwitchButton, Modal, Typography } from '@/ui'
import { usePostFormData } from './api/PostFormData'
import { useModalStore } from '@/utils/hooks/useModalStore'
import { getValidationSchema } from '@/utils/helpers/helpers'
import styles from './Form.module.scss'
import { FormFields } from './components/FormFields/FormFields'
import { SuccessMes } from './components/SuccessMes/SuccessMes'
import { useTranslation } from 'react-i18next'

export const FormModal = ({ themeTitle }) => {
  const { t } = useTranslation()
  const { fetchRequest, isSuccess, resetSuccess, isLoading } = usePostFormData()
  const { isOpen, closeModal } = useModalStore()

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      theme: themeTitle || '',
      message: '',
      policy: false,
    },
    validationSchema: getValidationSchema(t),
    onSubmit: async (values) => {
      await fetchRequest(values)
      formik.resetForm()
      closeModal()
    },
  })

  useEffect(() => {
    if (isOpen) {
      formik.setValues(prev => ({
        ...prev,
        theme: themeTitle || '',
      }))
    }
  }, [isOpen, themeTitle])

  return (
    <>
      {isSuccess ? (
        <Modal isOpen={isSuccess} onClose={resetSuccess}>
          <SuccessMes />
        </Modal>
      ) : (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <Typography variant="fs24" weight="fw6" color="#FF6600">
              {t("form.askQuestion")}
            </Typography>
            <FormFields formik={formik} />
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="policy"
                checked={formik.values.policy}
                onChange={formik.handleChange}
              />
              <Typography
                variant="fs14"
                color={formik.touched.policy && formik.errors.policy && "red"}
              >
                {t("form.policy")}
              </Typography>
            </label>
            <SwitchButton maxWidth="191px" type="submit" disabled={isLoading}>
              {isLoading ? t("buttons.sending") : t("buttons.send")}
            </SwitchButton>
          </form>
        </Modal>
      )}
    </>
  )
}
