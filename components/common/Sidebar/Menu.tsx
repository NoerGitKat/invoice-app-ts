import Link from "next/link";

export interface IMenuProps {
  menuItems: string[];
}

export default function Menu({ menuItems }: IMenuProps) {
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item}>
          <Link href={item.includes("Create") ? "/create" : `/${item.toLowerCase()}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}
