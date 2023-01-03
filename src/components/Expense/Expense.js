import styles from "./Expense.module.scss";

export default function Expense() {
  return (
    <div className={styles.expense}>
      <div className={styles.section}>
        <input type="date" className={styles.input} />
      </div>
      <div className={styles.section}>
        <select className={styles.input} name="category" id="categories">
          <option value="vivienda">VIVIENDA</option>
          <option value="comida">COMIDA</option>
          <option value="servicios">SERVICIOS</option>
          <option value="transporte">TRANSPORTE</option>
          <option value="ocio">OCIO</option>
          <option value="deudas">DEUDAS</option>
        </select>
      </div>
      <div className={styles.section}>
        <input className={styles.input} placeholder="MONTO" />
      </div>
      <div className={styles.section}>
        <input className={styles.input} placeholder="DESCRIPTION" />
      </div>
      <button className={styles.add}>AGREGAR +</button>
    </div>
  );
}
