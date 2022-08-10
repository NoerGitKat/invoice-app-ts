import Link from "next/link";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const menuItems = ["Create New Invoice", "History"];
  return (
    <nav className={styles.sidebar}>
      <section className={styles.sidebar__container}>
        <header className={styles.sidebar__container__header}>
          <Link href="/">
            <h1 className={styles.sidebar__container__header__h1}>Invoice App</h1>
          </Link>
        </header>
        <Menu menuItems={menuItems} />
      </section>
    </nav>
  );
}
