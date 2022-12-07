import styles from "../styles/components/homeGallery.module.scss";

const HomeGallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={`/assets/home/main1.png`} />
      </div>
      <div className={styles.img_container}>
        <img src={`/assets/home/main2.png`} />
      </div>
      <div className={styles.img_container}>
        <img src={`/assets/home/main3.png`} />
      </div>
      <div className={styles.img_container}>
        <img src={`/assets/home/main4.png`} />
      </div>
    </div>
  );
};

export default HomeGallery;
