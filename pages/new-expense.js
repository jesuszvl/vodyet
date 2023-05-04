import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { API_BASE_URL } from "../config/api";
import auth from "../src/utils/firebaseConfig";

import styles from "../src/styles/NewExpense.module.scss";
import BaseButton from "../src/components/BaseButton/BaseButton";
import TextInput from "../src/components/TextInput/TextInput";
import Wrapper from "../src/components/Wrapper/Wrapper";
import CategorySelector from "../src/components/CategorySelector/CategorySelector";

export default function NewExpense() {
  const [expenseData, setExpenseData] = useState({
    date: "",
    ammount: "",
    description: "",
    category: "comida",
    userId: null,
  });

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setExpenseData((prevExpenseData) => ({
          ...prevExpenseData,
          userId: user.uid,
        }));
      }
    });

    return unsubscribe;
  }, []);

  const handleNewExpense = async (event) => {
    event.preventDefault();
    const response = await fetch(API_BASE_URL + "/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });
    router.push("/dashboard");
  };

  const updateExpenseCategory = (optionValue) => {
    setExpenseData((prevExpenseData) => ({
      ...prevExpenseData,
      category: optionValue,
    }));
  };

  const isUserLoggedIn = expenseData?.userId !== null;

  return (
    <Wrapper showMenu isUserLoggedIn={isUserLoggedIn}>
      <div className={styles.content}>
        <form onSubmit={handleNewExpense} className={styles["expense-form"]}>
          <TextInput
            type="datetime-local"
            label={"Fecha y Hora"}
            value={expenseData.date}
            onChange={(event) =>
              setExpenseData((prevExpenseData) => ({
                ...prevExpenseData,
                date: event.target.value,
              }))
            }
          ></TextInput>
          <TextInput
            type="number"
            label={"Monto"}
            value={expenseData.ammount}
            onChange={(event) =>
              setExpenseData((prevExpenseData) => ({
                ...prevExpenseData,
                ammount: event.target.value,
              }))
            }
          ></TextInput>
          <TextInput
            label={"Descripción"}
            value={expenseData.description}
            onChange={(event) =>
              setExpenseData((prevExpenseData) => ({
                ...prevExpenseData,
                description: event.target.value,
              }))
            }
          ></TextInput>
          <CategorySelector
            onCategoryUpdate={updateExpenseCategory}
            label={"Categoría"}
          />
          <BaseButton text="INGRESAR GASTO" type="submit" />
        </form>
      </div>
    </Wrapper>
  );
}
