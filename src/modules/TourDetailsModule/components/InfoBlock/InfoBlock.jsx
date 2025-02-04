import { Typography } from "@/ui";
import styles from "./InfoBlock.module.scss";
import { getPlainText } from "@/utils/helpers/helpers";

export const InfoBlock = ({ item }) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoImg}>
        <img src={item?.image} alt={item?.title} />
      </div>
      <div className={styles.texts}>
        <Typography variant="h4" color="#FF6600" weight="fw6">
          {item?.title}
        </Typography>
        <Typography variant="fs24" weight="fw5" className={styles.description}>
          {getPlainText(item?.description)}
        </Typography>
      </div>
    </div>
  );
};
