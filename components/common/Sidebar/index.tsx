import Link from "next/link";
import styles from "./Sidebar.module.scss";

export interface ISidebarProps {}

export default function Sidebar(props: ISidebarProps) {
  const menuItems = ["Create New Invoice", "History"];
  return (
    <nav className={styles.sidebar}>
      <section className={styles.sidebar__container}>
        <header className={styles.sidebar__container__header}>
          <Link href="/">
            <h1 className={styles.sidebar__container__header__h1}>
              Invoice App
            </h1>
          </Link>
        </header>
        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href={
                  item.includes("Create") ? "/create" : `/${item.toLowerCase()}`
                }
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
}
