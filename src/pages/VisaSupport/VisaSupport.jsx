import { useParams } from 'react-router-dom'
import styles from './VisaSupport.module.scss'
import { VisaSupportApi } from '@/modules/HomeModules/VisaSupport/api/VisaSupportApi'
import { useEffect } from 'react'

export const VisaSupport = () => {
  const { id } = useParams()
  const { visaData, visaRequest } = VisaSupportApi()

  useEffect(() => {
    visaRequest()
    // если поместить visaData то будет зациклинное повторение лога
  }, [visaRequest])

  const visa = visaData.find((currentVisa) => currentVisa.id === Number(id))

  console.log('its visaData:', visaData)

  if (!visa) return <div>Loading...</div>

  return (
    <main>
      <section>
        <div>{visa.title}</div>
      </section>
    </main>
  )
}

return (
  <script>
    {JSON.stringify({
      id: 1,
      title: 'Виза в Китай',
      icon: 'https://goproject.site/back_media/visago/1ca52cc4-c444-43a2-a763-d06003f66fb0.webp',
      description: 'Описание визы в Китай',
      page_title: 'Страница визы в Китай',
      page_description: 'Описание страницы',
      images: [
        {
          id: 1,
          image: 'https://goproject.site/back_media/visagoimages/1315219.jpeg',
          description: '<p>Описание изображения</p>',
        },
        {
          id: 2,
          image:
            'https://goproject.site/back_media/visagoimages/bc5162ffa190b927c7262820fa35a066b20b07ec24a9b886473bec2299ce9062.jpg',
          description: '<p>Описание изображения&nbsp;</p>',
        },
      ],
    })}
  </script>
)
