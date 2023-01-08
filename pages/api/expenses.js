export default function handler(req, res) {
  const expenses = [
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
      category: "servicios",
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
      description: "Prestamo",
      ammount: "$1,365.49",
      date: new Date(),
      category: "deudas",
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

  res.status(200).json(expenses);
}
