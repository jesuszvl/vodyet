import { useState } from "react";
import History from "../src/components/History/History";
import styles from "../src/styles/Home.module.scss";
import Header from "../src/components/Header/Header";
import ActionButton from "../src/components/ActionButton/ActionButton";
import Login from "../src/components/Login/Login";

export default function Home() {
  const [login, setLogin] = useState(false);

  const onButtonClick = () => {
    setLogin(true);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{login ? <History /> : <Login />}</div>
      <ActionButton
        text={login ? "NEW EXPENSE" : "LOGIN"}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}
