import { useFieldArray, useForm } from "react-hook-form";
import { IInvoiceFormData } from "../../../interfaces";
import styles from "./InvoiceForm.module.scss";
import ProductList from "./ProductList";

export default function InvoiceForm() {
  const { register, control, handleSubmit } = useForm<IInvoiceFormData>({
    defaultValues: {
      "user-address": "",
      "user-city": "",
      "user-postal-code": "",
      "user-country": "",
      "client-address": "",
      "client-name": "",
      "client-city": "",
      "client-postal-code": "",
      "client-country": "",
      "client-email": "",
      "invoice-date": new Date(),
      "payment-terms": undefined,
      "project-desc": "",
      products: [],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <section>
        <h4>Bill From</h4>
        <article className={styles.form__group}>
          <label htmlFor="user-address">Street Address *</label>
          <input
            {...register("user-address", { required: true })}
            type="text"
            name="user-address"
          />
        </article>
        <article className={`${styles.form__group} ${styles["form__group--rows"]}`}>
          <aside>
            <label htmlFor="user-city">City *</label>
            <input {...register("user-city", { required: true })} type="text" name="user-city" />
          </aside>
          <aside>
            <label htmlFor="user-postal-code">Postal Code *</label>
            <input
              {...register("user-postal-code", { required: true })}
              type="text"
              name="user-postal-code"
            />
          </aside>
          <aside>
            <label htmlFor="user-country">Country *</label>
            <input
              {...register("user-country", { required: true })}
              type="text"
              name="user-country"
            />
          </aside>
        </article>
      </section>
      <section>
        <h4>Bill To</h4>
        <article className={styles.form__group}>
          <label htmlFor="client-name">Client Name *</label>
          <input {...register("client-name", { required: true })} type="text" name="client-name" />
        </article>
        <article className={styles.form__group}>
          <label htmlFor="client-email">Client Email *</label>
          <input
            {...register("client-email", { required: true })}
            type="email"
            name="client-email"
          />
        </article>
        <article className={styles.form__group}>
          <label htmlFor="client-address">Street Address *</label>
          <input
            {...register("client-address", { required: true })}
            type="text"
            name="client-address"
          />
        </article>
        <article className={`${styles.form__group} ${styles["form__group--rows"]}`}>
          <aside>
            <label htmlFor="client-city">City *</label>
            <input
              {...register("client-city", { required: true })}
              type="text"
              name="client-city"
            />
          </aside>
          <aside>
            <label htmlFor="client-postal-code">Postal Code *</label>
            <input
              {...register("client-postal-code", { required: true })}
              type="text"
              name="client-postal-code"
            />
          </aside>
          <aside>
            <label htmlFor="client-country">Country *</label>
            <input
              {...register("client-country", { required: true })}
              type="text"
              name="client-country"
            />
          </aside>
        </article>
        <article className={`${styles.form__group} ${styles["form__group--rows"]}`}>
          <aside>
            <label htmlFor="invoice-date">Invoice Date *</label>
            <input
              {...register("invoice-date", { required: true })}
              type="date"
              name="invoice-date"
            />
          </aside>
          <aside>
            <label htmlFor="payment-terms">Payment Terms *</label>
            <select {...register("payment-terms", { required: true })} name="payment-terms">
              <option value="upfront">Upfront</option>
              <option value="30-days">30 days</option>
              <option value="60-days">60 days</option>
            </select>
          </aside>
        </article>
        <article className={styles.form__group}>
          <label htmlFor="project-desc">Project Description *</label>
          <input
            {...register("project-desc", { required: true })}
            type="text"
            name="project-desc"
          />
        </article>
      </section>
      <ProductList
        register={register}
        fields={fields}
        append={append}
        remove={remove}
        control={control}
      />
    </form>
  );
}
