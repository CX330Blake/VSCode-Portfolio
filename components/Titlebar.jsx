// import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      {/* <Image
        src="/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      /> */}
       <div className={styles.windowButtons}>
        <span className={styles.close}></span>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
      </div>


      <p className={styles.title}><span className={styles.navCover}>CX330 - Visual Studio Code</span></p>

    </section>
  );
};

export default Titlebar;
