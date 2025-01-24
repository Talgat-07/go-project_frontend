import { Logo } from "@/ui/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";
import { FaWhatsapp } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { Typography } from "@/ui/Typography/Typography";
import styles from "./Header.module.scss";
import { SwitchButton } from "@/ui/SwitchButton/SwitchButton";
import { MultiContainer } from "@/ui/Multicontainer/Multicontainer";
import { SwitchLanguage } from "./components/SwithchLanguage/SwitchLanguage";
import { PATH } from "@/utils/constants/constants";
import { Link, useLocation } from "react-router-dom";
import { useForm } from '@/utils/hooks/useForm';

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === PATH.home;

  const { formShow } = useForm();

  const textColor = isHomePage ? "#fff" : "#000";

  const contacts = [
    {
      icon: <FaWhatsapp size={"24px"} style={{ color: textColor }} />,
      text: "+996(700)777 777",
      link: `tel:+996(700)777 777`,
    },
    {
      icon: <SlLocationPin size={"24px"} style={{ color: textColor }} />,
      text: "ул. Жукеева - Пудовкина 44/1",
      link: "#",
    },
  ];

  return (
    <header className={`${styles.header} ${isHomePage && styles.isHomePage}`}>
      <MultiContainer>
        <div className={styles.content}>
          <div className={styles.topBlock}>
            <div className={styles.contactBlock}>
              {contacts.map((item, index) => (
                <div key={index} className={styles.block}>
                  {item.icon}
                  <a href={item.link} target="_blank">
                    <Typography variant="fs16" color={textColor}>
                      {item.text}
                    </Typography>
                  </a>
                </div>
              ))}
            </div>
            <Link
              to={PATH.home}
              className={styles.logo}>
              <Logo color={textColor} />
            </Link>
            <div className={styles.activeBlock}>
              <SwitchButton
                maxWidth="208px"
                onClick={formShow}
              >
                Задать вопрос
              </SwitchButton>
              <SwitchLanguage color={textColor} />
            </div>
          </div>
          <div className={styles.nav}>
            <Navigation />
          </div>
        </div>
      </MultiContainer>
    </header>
  );
};
