import { useState } from "react";
import Select from "react-select";

import styles from "./CategorySelector.module.scss";

export default function CategorySelector({ onCategoryUpdate, label }) {
  const categories = [
    { value: "comida", label: "Comida" },
    { value: "deudas", label: "Deudas" },
    { value: "servicios", label: "Servicios" },
    { value: "transporte", label: "Transporte" },
    { value: "ocio", label: "Ocio" },
    { value: "vivienda", label: "Vivienda" },
  ];

  const [selectedOption, setSelectedOption] = useState(categories[0]);

  const handleChange = (option) => {
    setSelectedOption(option);
    onCategoryUpdate(option.value);
  };

  return (
    <div className={styles["category-selector-container"]}>
      {label && (
        <div className={styles["label-container"]}>
          <label className={styles.label}>{label}</label>
        </div>
      )}
      <Select
        options={categories}
        value={selectedOption}
        onChange={handleChange}
      />
    </div>
  );
}
