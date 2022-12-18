import { useEffect } from "react";
import styles from "../styles/components/homeGallery.module.scss";

const HomeGallery = ({ selectImage }) => {
  useEffect(() => {
    const onClickImage = (event) => {
      selectImage(event.target.id);
    };
    const imgs = document.getElementsByClassName("home_gallery__image");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("click", onClickImage);
    }
  }, [selectImage]);
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img
          className="home_gallery__image"
          id="main1"
          src={`/assets/home/main1.png`}
          alt="ziggurat"
        />
      </div>
      <div className={styles.img_container}>
        <img
          className="home_gallery__image"
          id="main2"
          src={`/assets/home/main2.png`}
          alt="pre-KvK winning"
        />
      </div>
      <div className={styles.img_container}>
        <img
          className="home_gallery__image"
          id="main3"
          src={`/assets/home/main3.png`}
          alt="unstoppable pass rally"
        />
      </div>
      <div className={styles.img_container}>
        <img
          className="home_gallery__image"
          id="main4"
          src={`/assets/home/main4.png`}
          alt="swarming flags"
        />
      </div>
    </div>
  );
};

export default HomeGallery;
