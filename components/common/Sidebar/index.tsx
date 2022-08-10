import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Create New Invoice", "History"];

  return (
    <>
      <aside className={styles.hamburger} onClick={() => setIsOpen((prevState) => !prevState)}>
        <div className={styles.hamburger__icon}>
          <div role="button" className={`${styles.bar} ${isOpen ? styles.bar__top : ""}`} />
          <div role="button" className={`${styles.bar} ${isOpen ? styles.bar__middle : ""}`} />
          <div role="button" className={`${styles.bar} ${isOpen ? styles.bar__bottom : ""}`} />
        </div>
      </aside>
      <nav className={`${styles.sidebar} ${isOpen ? styles["sidebar--open"] : ""}`}>
        <section className={styles.sidebar__container}>
          <header className={styles.sidebar__container__header}>
            <Link href="/">
              <h1 className={styles.sidebar__container__header__h1}>Invoice App</h1>
            </Link>
          </header>
          <Menu menuItems={menuItems} />
        </section>
      </nav>
    </>
  );
}
