import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PageContainer from "../src/components/PageContainer/PageContainer";
import UserForm from "../src/components/UserForm/UserForm";
import styles from "../src/styles/Index.module.scss";
import { supabaseClient } from "../src/supabase/client";
import { trackPageView } from "../src/utils/analytics";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchSessionUser = async () => {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser();
      if (user) {
        router.push("/me");
      }
    };

    fetchSessionUser();
  }, [router]);

  // Tracking Page View
  useEffect(() => {
    trackPageView("/login");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: "http://localhost:3000/me",
        },
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer title="VODYET | Iniciar Sesión">
      <div className={styles.content}>
        <UserForm
          title="Accede a tu cuenta"
          subtitle="Ingresa tu correo electrónico para continuar"
          handleSubmit={handleLogin}
          submitText={"Iniciar Sesión"}
          email={email}
          setEmail={setEmail}
        />
      </div>
    </PageContainer>
  );
}
