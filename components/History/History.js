import Record from "../Record/Record";
import styles from "./History.module.scss";

export default function History() {
  const history = [
    {
      description: "Spotify",
      ammount: "$179.00",
      year: 2022,
      day: 11,
      month: "AGO",
      category: "servicios",
    },
    {
      description: "TELNOR",
      ammount: "$549.00",
      year: 2022,
      day: 10,
      month: "AGO",
      category: "vivienda",
    },
    {
      description: "Cigarros",
      ammount: "$500.00",
      year: 2022,
      day: 9,
      month: "AGO",
      category: "ocio",
    },
    {
      description: "Ley Mandado",
      ammount: "$866.04",
      year: 2022,
      day: 8,
      month: "AGO",
      category: "alimentos",
    },
    {
      description: "OXXO",
      ammount: "$41.00",
      year: 2022,
      day: 8,
      month: "AGO",
      category: "alimentos",
    },
    {
      description: "Renta",
      ammount: "$8,000.00",
      year: 2022,
      day: 8,
      month: "AGO",
      category: "vivienda",
    },
    {
      description: "Contadora",
      ammount: "$864.00",
      year: 2022,
      day: 8,
      month: "AGO",
      category: "servicios",
    },
    {
      description: "Cigarros",
      ammount: "$500.00",
      year: 2022,
      day: 7,
      month: "AGO",
      category: "ocio",
    },
    {
      description: "Didi",
      ammount: "$132.94",
      year: 2022,
      day: 7,
      month: "AGO",
      category: "transporte",
    },
    {
      description: "Didi",
      ammount: "$191.00",
      year: 2022,
      day: 7,
      month: "AGO",
      category: "alimentos",
    },
    {
      description: "Garrafon de Agua",
      ammount: "$16.00",
      year: 2022,
      day: 7,
      month: "AGO",
      category: "alimentos",
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
