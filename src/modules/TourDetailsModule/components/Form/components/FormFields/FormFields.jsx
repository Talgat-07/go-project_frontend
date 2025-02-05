import { Input } from '@/ui'
import { handlePhoneChange } from '@/utils/helpers/helpers'

export const FormFields = ({ formik }) => (
  <>
    <Input
      label="Имя"
      placeholder="Как к вам обращаться?"
      {...formik.getFieldProps('name')}
      maxLength={50}
      helperText={formik.touched.name && formik.errors.name}
      error={formik.touched.name && !!formik.errors.name}
    />
    <Input
      label="Телефон"
      placeholder="+996"
      {...formik.getFieldProps('phone')}
      maxLength={50}
      inputMode="numeric"
      onChange={e => handlePhoneChange(e, formik.setFieldValue)}
      helperText={formik.touched.phone && formik.errors.phone}
      error={formik.touched.phone && !!formik.errors.phone}
    />
    <Input
      label="Тема"
      placeholder="Тема"
      {...formik.getFieldProps('theme')}
      maxLength={50}
    />
    <Input
      label="Сообщение"
      placeholder="Введите сообщение"
      {...formik.getFieldProps('message')}
      maxLength={200}
      textarea
      helperText={formik.touched.message && formik.errors.message}
      error={formik.touched.message && !!formik.errors.message}
    />
  </>
)