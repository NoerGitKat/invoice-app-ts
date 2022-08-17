import {
  Control,
  Controller,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
  useWatch,
} from "react-hook-form";
import { IInvoiceFormData, IProduct } from "../../../interfaces";
import styles from "./ProductList.module.scss";

export interface IProductListProps {
  register: UseFormRegister<IInvoiceFormData>;
  fields: (IProduct & Record<"id", string>)[];
  append: UseFieldArrayAppend<IInvoiceFormData, "products">;
  remove: UseFieldArrayRemove;
  control: Control<IInvoiceFormData, any>;
}

const Total = ({ control, index }: { control: Control<IInvoiceFormData>; index: number }) => {
  const formValues = useWatch({
    name: "products",
    control,
  });

  if (formValues && formValues[index]) {
    return <>${formValues[index].price * formValues[index].quantity}</>;
  }

  return <>0</>;
};

export default function ProductList({
  fields,
  register,
  control,
  remove,
  append,
}: IProductListProps) {
  return (
    <section className={styles.section}>
      <h4>Products List</h4>
      {fields.map((product, index) => (
        <article key={product.id} className={styles.form__group}>
          <aside>
            <label htmlFor="product-name">Product Name *</label>
            <Controller
              name={`products.${index}.name`}
              control={control}
              defaultValue={product.name}
              render={({ field }) => <input {...field} type="text" name="product-name" />}
            />
          </aside>
          <aside>
            <label htmlFor="product-quantity">Quantity *</label>
            <Controller
              name={`products.${index}.quantity`}
              control={control}
              defaultValue={product.quantity}
              render={({ field }) => <input {...field} type="number" name="product-quantity" />}
            />
          </aside>
          <aside>
            <label htmlFor="product-price">Price *</label>
            <Controller
              name={`products.${index}.price`}
              control={control}
              defaultValue={product.price}
              render={({ field }) => <input {...field} type="number" name="product-price" />}
            />
          </aside>
          <aside>
            <Total control={control} index={index} />
          </aside>
          <aside>
            <button type="button" className="btn btn--delete" onClick={() => remove(index)}>
              Delete
            </button>
          </aside>
        </article>
      ))}
      <button
        className="btn"
        type="button"
        onClick={() => append({ name: "", price: 0, quantity: 0 })}
      >
        Add Product
      </button>
    </section>
  );
}
