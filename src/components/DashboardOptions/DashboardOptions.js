import React from "react";
import styles from "./DashboardOptions.module.scss";
import BaseButton from "../BaseButton/BaseButton";

export default function DashboardOptions() {
  return (
    <div className={styles["dashboard-container"]}>
      <span>
        <b>Presupuesto Mensual:</b> $22,964.71
      </span>
      <span>
        <b>Gasto Mensual:</b> $12,365.09
      </span>
      <span>
        <b>Diferencial:</b> $10,064.58
      </span>
      <BaseButton text={"Agregar Gasto"} />
      <BaseButton text={"Agregar Gasto"} />
    </div>
  );
}
