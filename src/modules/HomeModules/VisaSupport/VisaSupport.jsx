import styles from "./VisaSupport.module.scss";
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer';
import { Heading } from '@/ui/Heading/Heading';
import { Slider } from '@/ui/Slider/Slider';
import { VisaCard } from "../VisaSupport/ui/VisaCard/VisaCard";

export const VisaSupport = () => {

  const data = [
    {
      title: "Китай",
      description: "Бизнес виза Туристическая виза Студенческая виза"
    },
    {
      title: "Китай",
      description: "Бизнес виза Туристическая виза Студенческая виза"
    },
    {
      title: "Китай",
      description: "Бизнес виза Туристическая виза Студенческая виза"
    },
    {
      title: "Китай",
      description: "Бизнес виза Туристическая виза Студенческая виза"
    },
    {
      title: "Китай",
      description: "Бизнес виза Туристическая виза Студенческая виза"
    },
  ];

  return (
    <>
      <MultiContainer>
        <div className={styles.headpart}>
          <Heading text="Визовая поддержка- Visa Go" />
        </div>
      </MultiContainer >
      <div className={styles.cards}>
        <Slider
          data={data}
          slidesPerView={4}
          renderItem={(item) => (
            <VisaCard item={item} />
          )}
          loop={true}
        />
      </div>
    </>
  );
};
