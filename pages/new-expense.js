import { useState, useEffect } from "react";

import { API_BASE_URL } from "../config/api";
import auth from "../src/utils/firebaseConfig";

import styles from "../src/styles/NewExpense.module.scss";
import BaseButton from "../src/components/BaseButton/BaseButton";
import TextInput from "../src/components/TextInput/TextInput";
import Wrapper from "../src/components/Wrapper/Wrapper";

export default function NewExpense() {
  const [userId, setUserId] = useState(null);
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return unsubscribe;
  }, []);

  const handleNewExpense = async (event) => {
    event.preventDefault();
    const expenseData = {
      date: expenseDate,
      value: expenseValue,
      desc: expenseDescription,
      userId: userId,
    };
    const response = await fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });
    console.log(response.status);
  };

  return (
    <Wrapper>
      <div className={styles.content}>
        <form onSubmit={handleNewExpense} className={styles["expense-form"]}>
          <TextInput
            type="datetime-local"
            label={"Fecha y Hora"}
            value={expenseDate}
            onChange={(event) => setExpenseDate(event.target.value)}
          ></TextInput>
          <TextInput
            type="number"
            label={"Monto"}
            value={expenseValue}
            onChange={(event) => setExpenseValue(event.target.value)}
          ></TextInput>
          <TextInput
            label={"Descripción"}
            value={expenseDescription}
            onChange={(event) => setExpenseDescription(event.target.value)}
          ></TextInput>
          <BaseButton text="INGRESAR GASTO" type="submit" />
        </form>
      </div>
    </Wrapper>
  );
}
