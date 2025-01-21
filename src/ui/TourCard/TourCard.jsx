import { SwitchButton } from "../SwitchButton/SwitchButton";
import { Typography } from "../Typography/Typography";
import styles from "./TourCard.module.scss";

export const TourCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.title} />
      <Typography variant="fs24" weight="fw7" color="#fff">{item.title}</Typography>
      <div>
        <Typography weight="fw5" color="#fff">{item.place}</Typography>
        <Typography weight="fw5" color="#fff">{item.date}</Typography>
      </div>
      <div>
        <Typography weight="fw7" color="#fff">{item.price}</Typography>
        <SwitchButton maxWidth="165px">Подробнее</SwitchButton>
      </div>
    </div>
  );
};
