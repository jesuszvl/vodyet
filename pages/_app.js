import "../src/styles/globals.scss";

import { Lato } from "next/font/google";
import { useEffect } from "react";

import { supabaseClient } from "../src/supabase/client";
import { initializeAnalytics } from "../src/utils/analytics";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

initializeAnalytics();

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {});
  }, []);

  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
