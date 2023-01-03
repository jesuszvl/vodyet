import Record from "../Record/Record";
import styles from "./History.module.scss";

export default function History() {
  const history = [
    {
      description: "Spotify",
      ammount: "$179.00",
      date: new Date(),
      category: "servicios",
    },
    {
      description: "TELNOR",
      ammount: "$549.00",
      date: new Date(),
      category: "vivienda",
    },
    {
      description: "Cigarros",
      ammount: "$500.00",
      date: new Date(),
      category: "ocio",
    },
    {
      description: "Mandado",
      ammount: "$866.04",
      date: new Date(),
      category: "comida",
    },
    {
      description: "OXXO",
      ammount: "$41.00",
      date: new Date(),
      category: "comida",
    },
    {
      description: "Renta",
      ammount: "$8,000.00",
      date: new Date(),
      category: "vivienda",
    },
    {
      description: "Contadora",
      ammount: "$864.00",
      date: new Date(),
      category: "servicios",
    },
    {
      description: "Cigarros",
      ammount: "$500.00",
      date: new Date(),
      category: "ocio",
    },
    {
      description: "Didi",
      ammount: "$132.94",
      date: new Date(),
      category: "transporte",
    },
    {
      description: "Didi",
      ammount: "$191.00",
      date: new Date(),
      category: "comida",
    },
    {
      description: "Garrafon",
      ammount: "$16.00",
      date: new Date(),
      category: "comida",
    },
  ];

  return (
    <div className={styles.history}>
      {history.map((record, i) => {
        return <Record key={i} {...record} />;
      })}
    </div>
  );
}
