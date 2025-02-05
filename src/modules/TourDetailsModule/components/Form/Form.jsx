import React, { useState, useEffect } from 'react'
import { Input, SwitchButton, Modal, Typography  } from '@/ui'
import { postFormData } from './api/PostFormData'
import { useModalStore } from '@/utils/hooks/useModalStore'
import styles from './Form.module.scss'

export const FormModal = ({ themeTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    theme: themeTitle || '',
    message: '',
    policy: false,
  })

  const { fetchRequest } = postFormData()
  const { isOpen, closeModal } = useModalStore()

  const handleChange = event => {
    const { name, value, type, checked } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async event => {
    event.preventDefault()
    await fetchRequest(formData)
    closeModal()
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        theme: themeTitle || '',
      }))
    }
  }, [isOpen, themeTitle])

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Typography variant="fs24" weight="fw6" color="#FF6600">Задать вопрос</Typography>
        <Input
          label="Имя"
          placeholder="Имя"
          onChange={handleChange}
          value={formData.name}
          name="name"
          maxLength={50}
        />
        <Input
          label="Телефон"
          placeholder="Телефон"
          onChange={handleChange}
          value={formData.phone}
          name="phone"
          maxLength={50}
        />
        <Input
          label="Тема"
          placeholder="Тема"
          onChange={handleChange}
          value={formData.theme}
          name="theme"
          maxLength={50}
        />
        <Input
          label="Сообщение"
          placeholder="Сообщение"
          onChange={handleChange}
          value={formData.message}
          name="message"
          maxLength={200}
          textarea
        />
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="policy"
            checked={formData.policy}
            onChange={handleChange}
          />
          <Typography variant="fs14">Я согласен с политикой конфиденциальности</Typography>
        </label>
        <SwitchButton maxWidth="191px" type="submit">Отправить</SwitchButton>
      </form> 
    </Modal>
  )
}
