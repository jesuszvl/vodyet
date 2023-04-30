import { useState, useEffect } from "react";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";

import styles from "../src/styles/Login.module.scss";
import Wrapper from "../src/components/Wrapper/Wrapper";
import Header from "../src/components/Header/Header";
import HeroSection from "../src/components/HeroSection/HeroSection";

function Index() {
  const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/me");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Wrapper showFooter>
      <Header />
      <HeroSection />
    </Wrapper>
  );
}

export default Index;
