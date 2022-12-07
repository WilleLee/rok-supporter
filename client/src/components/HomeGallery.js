import styles from "../styles/components/homeGallery.module.scss";

const HomeGallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={`/assets/home/main1.png`} alt="ziggurat" />
      </div>
      <div className={styles.img_container}>
        <img src={`/assets/home/main2.png`} alt="pre-KvK winning" />
      </div>
      <div className={styles.img_container}>
        <img src={`/assets/home/main3.png`} alt="unstoppable pass rally" />
      </div>
      <div className={styles.img_container}>
        <img src={`/assets/home/main4.png`} alt="swarming flags" />
      </div>
    </div>
  );
};

export default HomeGallery;
