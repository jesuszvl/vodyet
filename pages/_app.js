import "../src/styles/globals.scss";

import { Lato } from "next/font/google";

import { initializeAnalytics } from "../src/utils/analytics";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

initializeAnalytics();

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component className="content" {...pageProps} />
    </main>
  );
}
