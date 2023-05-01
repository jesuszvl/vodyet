import { useEffect } from "react";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";

import Wrapper from "../src/components/Wrapper/Wrapper";
import Header from "../src/components/Header/Header";
import HeroSection from "../src/components/HeroSection/HeroSection";
import Features from "../src/components/Features/Features";

function Index() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/me");
      }
    });

    return unsubscribe;
  }, [router]);

  return (
    <Wrapper showActionButton>
      <HeroSection />
      <Features />
    </Wrapper>
  );
}

export default Index;
