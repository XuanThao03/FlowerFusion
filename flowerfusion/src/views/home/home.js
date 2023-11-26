import React from 'react';
import {
  IMG_CoverCata1,
  IMG_CoverCata2,
  IMG_CoverCata3,
  IMG_Flower2,
  IMG_Flower3,
  IMG_Home2,
  IMG_Home3,
  IMG_Home5,
  IMG_bgBtBanner,
  IMG_bgHome,
} from '../../assets/images';
import styles from './home.module.scss';
import {IC_DownArrow, IC_NextArrow} from '../../assets/icons';
import ItemFlower from '../../components/itemFlower/ItemFlower';
import {NavLink} from 'react-router-dom';
import BottomBanner from '../../components/banner/bottomBanner';
function Home() {
  const flowers = [
    {
      img: IMG_Flower2,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower3,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {img: IMG_Flower2, name: 'Happy Wishes', price: '340.000', discount: '10%'},
    {
      img: IMG_Flower3,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower3,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower2,
      name: 'Joyful Wishes',
      price: '340.000',
      discount: '10%',
    },
    {
      img: IMG_Flower3,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower2,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower3,
      name: 'Joyful Wishes',
      price: '440.000',
      discount: '10%',
    },
    {
      img: IMG_Flower2,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower3,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
    {
      img: IMG_Flower2,
      name: 'Joyful Wishes',
      price: '240.000',
      discount: '10%',
    },
  ];
  const flowerLists = flowers.map(fl => {
    return (
      <NavLink className={styles.itemProduct} to="/flowers/detail" exact={true}>
        <ItemFlower
          className={styles.itemFlower}
          img={fl.img}
          name={fl.name}
          price={fl.price}
          discount={fl.discount}
        />
      </NavLink>
    );
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <div
          className={styles.imgContainer}
          style={{
            background: `url(${IMG_Home5})`,
            backgroundRepeat: 'no-repeat',

            backgroundSize: 'cover',
          }}>
          <div className={styles.gradientBg}>
            <p className={styles.txtFirst}>
              CREATE YOUR OWN STYLE WITH VANCOUVER'S
            </p>
            <p className={styles.txtFirst}>PREMIER FLOWER EXPERTS</p>
          </div>
        </div>
        <button className={styles.btnDown}>
          <img className={styles.iconDown} src={IC_DownArrow} />
        </button>
      </div>
      <div className={styles.greetingContainer}>
        <p className={styles.txtHeader}>WELCOME TO OUR FLOWER SHOP!</p>
        <p className={styles.txtDetail}>
          We are a women-owned business on a mission to bring the magic of
          plants into your life. explore our webpage for curated collections,
          expert tips, and exclusive deals. let us guide you on a botanical
          journey and fill your life with green beauty! we are reopening our
          showroom november 2023
        </p>
      </div>
      <div className={styles.bestSeller}>
        <div className="flex justify-between">
          <p className={styles.txtTitle}>BEST SELLER</p>
          <button className={styles.txtViewall}>View all</button>
        </div>

        <ul className="flex overflow-x-scroll no-scrollbar">{flowerLists}</ul>
      </div>
      <div
        className={styles.middleBanner}
        style={{
          background: `url(${IMG_bgBtBanner})`,
        }}>
        <p className={styles.txtTitle}>
          CHECK OUT WHAT OUR CUSTOMERS HAVE TO SAY
        </p>
        <p className={styles.txtRate}>1000+ ★★★★★ Customer reviews</p>
        <button className={styles.btnSeenow}>See now</button>
      </div>
      <div className={styles.thirdContainer}>
        <p className={styles.txtTitle}>CATALOG</p>
        <div className={styles.cataContainer}>
          <div className={styles.leftCata}>
            <NavLink
              to={'/flowers'}
              exact={true}
              className={styles.coverImg}
              style={{
                background: `url(${IMG_CoverCata1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>
              <div className={styles.inforContainer}>
                <div>
                  <p className={styles.txtNameCata}>WINTER BERRIES</p>
                  <p className={styles.txtProduct}>12 products</p>
                </div>
                <button className={styles.btnDown}>
                  <img src={IC_NextArrow} />
                </button>
              </div>
            </NavLink>

            <NavLink
              to={'/flowers'}
              exact={true}
              className={styles.coverImg}
              style={{
                background: `url(${IMG_CoverCata2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>
              <div className={styles.inforContainer}>
                <div>
                  <p className={styles.txtNameCata}>FAUX PAMPAS GRASS</p>
                  <p className={styles.txtProduct}>10 products</p>
                </div>
                <button className={styles.btnDown}>
                  <img src={IC_NextArrow} />
                </button>
              </div>
            </NavLink>
          </div>
          <div className={styles.rightCata}>
            <NavLink
              to={'/flowers'}
              exact={true}
              className={styles.coverImgRight}
              style={{
                background: `url(${IMG_CoverCata3})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}>
              <div className={styles.inforContainer}>
                <div>
                  <p className={styles.txtNameCata}>KIKU FLOWER</p>
                  <p className={styles.txtProduct}>10 products</p>
                </div>
                <button className={styles.btnDown}>
                  <img src={IC_NextArrow} />
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <BottomBanner />
    </div>
  );
}

export default Home;
