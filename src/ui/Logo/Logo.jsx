import { LogGo } from "@/app/assets/icons/LogGo";
import { LogoText } from "@/app/assets/icons/LogoText";
import styles from "./Logo.module.scss";

export const Logo = ({ color }) => {
  return (
    <div className={styles.logo}>
      <LogGo />
      <LogoText className={styles.text} color={color}/>
    </div>
  );
};
