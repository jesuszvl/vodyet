import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PageContainer from "../src/components/PageContainer/PageContainer";
import UserForm from "../src/components/UserForm/UserForm";
import { useUserStore } from "../src/store/userStore";
import styles from "../src/styles/Index.module.scss";
import { supabaseClient } from "../src/supabase/client";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  // Tracking Page View
  useEffect(() => {
    if (user) {
      router.push("/me");
    }
  }, [user, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: "http://localhost:3000/me",
        },
      });
      setMagicLinkSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const renderMagicLinkMessage = () => {
    return (
      <>
        <h2>Revisa tu correo</h2>
        <p>
          Hemos enviado un correo electrónico a <b>{email}</b> con un enlace
          para iniciar sesión.
        </p>
      </>
    );
  };

  return (
    <PageContainer title="VODYET | Iniciar Sesión">
      <div className={styles.content}>
        {magicLinkSent ? (
          renderMagicLinkMessage()
        ) : (
          <UserForm
            title="Accede a tu cuenta"
            subtitle="Ingresa tu correo electrónico para continuar"
            handleSubmit={handleLogin}
            submitText={"Iniciar Sesión"}
            email={email}
            setEmail={setEmail}
          />
        )}
      </div>
    </PageContainer>
  );
}
