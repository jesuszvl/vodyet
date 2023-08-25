import classNames from "classnames";

import BankIcon from "../../icons/BankIcon";
import BulbIcon from "../../icons/BulbIcon";
import CarIcon from "../../icons/CarIcon";
import FoodIcon from "../../icons/FoodIcon";
import GiftIcon from "../../icons/GiftIcon";
import HouseIcon from "../../icons/HouseIcon";
import styles from "./Record.module.scss";

export default function Record({ description, ammount, date, category }) {
  const renderIcon = () => {
    switch (category) {
      case "vivienda":
        return <HouseIcon />;
      case "comida":
        return <FoodIcon />;
      case "transporte":
        return <CarIcon />;
      case "deudas":
        return <BankIcon />;
      case "servicios":
        return <BulbIcon />;
      case "ocio":
        return <GiftIcon />;
      default:
        return <HouseIcon />;
    }
  };
  return (
    <div className={styles.record}>
      <span className={classNames(styles["icon"], styles[category])}>
        {renderIcon()}
      </span>
      <span className={styles.description}>{description}</span>
      <span className={styles.ammount}>-${ammount}</span>
    </div>
  );
}
