import AboutUs from "./aboutUs";
import Header from "./header";
import RectangleInfo from "./restangleInfo";
import styles from './styles.module.scss';
import ContactSection from "./сontactSection";


const HomePage = () => (
  <div className={styles.wrapper}>
    <Header/>
    <RectangleInfo text="our story" text2=" // ABOUT US" />
    <AboutUs/>
    <RectangleInfo text="where to find us" text2=" // CONTACT US" />
    <ContactSection/>
    
  </div>
);

export default HomePage;
