import { Typography } from "@/ui/Typography/Typography";
import { SwitchButton } from "@/ui/SwitchButton/SwitchButton";
import styles from "./VisaCard.module.scss";

export const VisaCard = ({ item }) => {
  return (
    <div className={styles.block}>
      <img scr={item.image} alt={item.title}/>
      <Typography>{item.title}</Typography>
      <Typography>{item.description}</Typography>
      <SwitchButton maxWidth="165px">Подробнее</SwitchButton>
    </div>
  );
};
