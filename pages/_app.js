import "../src/styles/globals.scss";

import { Analytics } from "@vercel/analytics/react";
import { Lato } from "next/font/google";

const font = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component className="content" {...pageProps} />
      <Analytics />
    </main>
  );
}
