import { Typography } from "@/ui";
import styles from "./InfoBlock.module.scss";
// import parse from "html-react-parser";

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
        <div className={styles.description}>
          {/* {parse(item?.description)} */}
          {item?.description}
        </div>
      </div>
    </div>
  );
};
