import Header from "../components/Header";
import Button from "../components/Button";
import UserCard from "../components/UserCard";
import styles from "../styles/UserCard.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello</h1>
        <p>main page</p>
        <a href="/about">
          <Button text="Узнать больше"></Button>
        </a>
        <div className={styles.card}>
          <UserCard name="Максим" age={20} hobby="Web-developer" />
        </div>
      </main>
    </div>
  );
}
