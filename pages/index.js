import { useEffect } from "react";

import Features from "../src/components/Features/Features";
import HeroSection from "../src/components/HeroSection/HeroSection";
import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

function Index() {
  // Tracking Page View
  useEffect(() => {
    trackPageView("/");
  }, []);

  return (
    <PageContainer title="VODYET | ¡Vive sin pedos de varo!">
      <HeroSection />
      <Features />
    </PageContainer>
  );
}

export default Index;
