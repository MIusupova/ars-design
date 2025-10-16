import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <div className={styles.lang}>UA / RU / EN</div>
    </div>

    <div className={styles.logo}>
      <Link to="/">
        <img className={styles.img} src="/icons/logo.svg" alt="Logo" />
      </Link>
    </div>
    <div className={styles.title}>
      <h1 className={styles.company}>Architectural and construction company</h1>
    </div>

    <div className={styles.arrowWrapper}>
      <Link to="/">
        <img className={styles.str} src="/icons/Subtract.svg" alt="Arrow" />
      </Link>
    </div>
  </div>
);

export default Header;
