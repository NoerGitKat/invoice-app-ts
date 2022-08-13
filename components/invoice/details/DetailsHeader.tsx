import { useRouter } from "next/router";
import { EStatus } from "../../../interfaces";
import styles from "./DetailsHeader.module.scss";

export interface IDetailsHeaderProps {
  status: EStatus;
}

export default function DetailsHeader({ status }: IDetailsHeaderProps) {
  const { back } = useRouter();
  return (
    <section className={styles.section}>
      <button className={styles.button} onClick={back}>
        &#8592; Go Back
      </button>
      <header className={styles.header}>
        <aside className={styles.header__status}>
          <p>Status:</p>
          <p className={`status status--${status}`}>{status}</p>
        </aside>
        <aside className={styles.header__buttons}>
          <button className={`btn ${styles["header__buttons--edit"]}`}>Edit</button>
          <button className={`btn ${styles["header__buttons--delete"]}`}>Delete</button>
          <button className={`btn ${styles["header__buttons--paid"]}`}>Mark as paid</button>
        </aside>
      </header>
    </section>
  );
}
