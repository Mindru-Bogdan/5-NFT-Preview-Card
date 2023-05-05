import ImgEquilibrium from '../../src/image-equilibrium.jpg';
import IconView from '../../src/icon-view.svg';
import IconEthereum from '../../src/icon-ethereum.svg';
import IconClock from '../../src/icon-clock.svg';
import ImgAvatar from '../../src/image-avatar.png';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
      <img className={classes.equilibrium} src={ImgEquilibrium}></img>
      <img className={classes.overlay} src={IconView}></img>
      <h2>Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className={classes.price}>
        <img className={classes.ethereum} src={IconEthereum}></img>
        <h3>0.041 ETH</h3>
        <img className={classes.clock} src={IconClock}></img>
        <p>3 days left</p>
      </div>
      <div className={classes.line}></div>
      <div className={classes.footer}>
        <img src={ImgAvatar}></img>
        <h4>Creation of</h4>
        <p>Jules Wyvern</p>
      </div>
    </div>
  );
};

export default Card;
