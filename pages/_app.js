import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import "../src/styles/globals.scss";
import auth from "../src/utils/firebaseConfig";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return <Component {...pageProps} user={user} />;
}

export default MyApp;
