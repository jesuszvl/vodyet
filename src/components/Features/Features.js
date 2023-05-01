import ChartIcon from "../../icons/ChartIcon";
import MoneyIcon from "../../icons/MoneyIcon";
import WalletIcon from "../../icons/WalletIcon";
import styles from "./Features.module.scss";

const features = [
  {
    title: "Gasta",
    description:
      "Con nuestra herramienta de administración de gastos, registra tus transacciones diarias de manera organizada y categórica. Mantén un registro completo de tus finanzas y conoce en qué áreas estás invirtiendo tus recursos al visualizar tus gastos por categoría.",
    icon: <MoneyIcon />,
  },
  {
    title: "Rastrea",
    description:
      " Obtén información relevante sobre tu presupuesto mensual y descubre hacia dónde se va tu dinero con nuestra herramienta de seguimiento financiero. Analiza tus patrones de consumo al tener acceso a información detallada sobre tus gastos y ajusta tu presupuesto para alcanzar tus objetivos financieros.",
    icon: <ChartIcon />,
  },
  {
    title: "Planea",
    description:
      "Establece tus metas financieras y crea un plan personalizado con nuestra herramienta de planificación financiera. Con la ayuda de nuestra asistente IA, desarrolla un plan que te ayude a alcanzar tus objetivos y optimizar tus finanzas para hacer realidad tus sueños y alcanzar la libertad financiera.",
    icon: <WalletIcon />,
  },
];

export default function Features() {
  return (
    <div className={styles["features-container"]}>
      <h1 className={styles["features-title"]}>¿Como funciona?</h1>
      <div className={styles["features-grid"]}>
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
    </div>
  );
}
