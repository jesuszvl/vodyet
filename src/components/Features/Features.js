import ChartIcon from "../../icons/ChartIcon";
import MoneyIcon from "../../icons/MoneyIcon";
import WalletIcon from "../../icons/WalletIcon";
import styles from "./Features.module.scss";

const features = [
  {
    title: "Gasta",
    description: "Captura tus gastos diarios de manera categórica",
    icon: <MoneyIcon />,
  },
  {
    title: "Rastrea",
    description:
      "Obten información relevante sobre tu presupuesto mensual y descubre hacia donde se va tu dinero",
    icon: <ChartIcon />,
  },
  {
    title: "Planea",
    description:
      "Establece metas financieras y desarrolla un plan para lograrlo acompañado de nuestra asistente IA",
    icon: <WalletIcon />,
  },
];

export default function Features() {
  return (
    <div className={styles["features-container"]}>
      <h1 className={styles["features-title"]}>¿Como funciona?</h1>
      {features.map(({ title, description, icon }) => {
        return (
          <div key={title} className={styles["feature"]}>
            <div className={styles["feature-main"]}>
              {icon}
              <span className={styles.title}>{title}</span>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        );
      })}
    </div>
  );
}
