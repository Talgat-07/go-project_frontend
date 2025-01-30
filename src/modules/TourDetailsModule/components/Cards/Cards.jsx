import { Date } from "@/app/assets/icons/tourData/Date";
import styles from "./Cards.module.scss";
import { Typography } from "@/ui";

export const Cards = ({ item }) => {

  const data = [
    {
      title: 'Даты тура',
      description: item?.tour_date,
      icon: <Date />
    },
    {
      title: 'Тип визы',
      description: item?.visa_type,
      icon: <Date />
    },
    {
      title: 'Цена',
      description: item?.price,
      icon: <Date />
    },
    {
      title: 'Города',
      description: item?.cities,
      icon: <Date />
    },
    {
      title: 'В программе',
      description: item?.program,
      icon: <Date />
    },
    {
      title: 'Отели',
      description: item?.hotels,
      icon: <Date />
    },
  ];
  return (
    <div className={styles.cardsBlock}>
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          {item.icon}
          <div className={styles.texts}>
            <Typography variant='h4' weight='fw5'>
              {item.title}
            </Typography>
            <Typography variant='fs22'>
              {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
