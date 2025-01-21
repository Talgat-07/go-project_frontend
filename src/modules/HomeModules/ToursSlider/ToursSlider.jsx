import styles from './ToursSlider.module.scss';
import { Typography } from '@/ui/Typography/Typography';
import { Link } from 'react-router-dom';
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer';
import { Heading } from '@/ui/Heading/Heading';
import { PATH } from '@/utils/constants/constants';
import { ArrowRight } from '@/app/assets/icons/ArrowRight';
import { Slider } from '@/ui/Slider/Slider';
import { TourCard } from '@/ui/TourCard/TourCard';
import img from "@/app/assets/images/static_banner.jpg"

export const ToursSlider = () => {


  const data = [
    {
      title: "Бизнес-тур в Китай",
      place: "из Бишкека",
      date: "12 - 20 декабря",
      price: "от 2190 $",
      image: img
    },
    {
      title: "Бизнес-тур в Китай",
      place: "из Бишкека",
      date: "12 - 20 декабря",
      price: "от 2190 $"
    },
    {
      title: "Бизнес-тур в Китай",
      place: "из Бишкека",
      date: "12 - 20 декабря",
      price: "от 2190 $"
    },
    {
      title: "Бизнес-тур в Китай",
      place: "из Бишкека",
      date: "12 - 20 декабря",
      price: "от 2190 $"
    },
  ];

  return (
    <>
      <MultiContainer>
        <div className={styles.headpart}>
          <Heading  text="Туры" />
          <Link to={PATH.tours} className={styles.moreLink}>
            <Typography variant="fs24" color="#FA7335" weight="fw5">
              Все туры
            </Typography>
            <ArrowRight />
          </Link>
        </div>
      </MultiContainer >
      <div className={styles.cards}>
        <Slider
          data={data}
          renderItem={(item) => (
            <TourCard item={item} />
          )}
          loop={true}
        />
      </div>
    </>
  );
};
