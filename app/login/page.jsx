import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h3>Login</h3>
        <input type="text" name="username" placeholder="username" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
