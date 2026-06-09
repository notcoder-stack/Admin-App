"use client";

import styles from "@/app/ui/login/login.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError(res.error);
      } else if (res?.ok) {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>Login</h3>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          disabled={loading}
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
