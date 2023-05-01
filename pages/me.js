import { useState, useEffect } from "react";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";

import styles from "../src/styles/Login.module.scss";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Header from "../src/components/Header/Header";

function Me() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        router.push("/");
      }
    });

    return unsubscribe;
  }, [router]);

  const renderMePage = () => {
    return loggedIn ? <div>{userEmail}</div> : null;
  };

  return (
    <Wrapper
      showMenu
      isUserLoggedIn={loggedIn}
      onUserLogout={() => {
        auth.signOut();
      }}
    >
      <div className={styles.content}>{renderMePage()}</div>
    </Wrapper>
  );
}

export default Me;
