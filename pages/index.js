import Link from "next/link";

function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/todos">Todos</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
      <li>
        <Link href="/sales">Sales</Link>
      </li>
    </ul>
  );
}

export default HomePage;
