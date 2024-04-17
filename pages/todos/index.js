import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { notFound } from "next/navigation";
import Link from "next/link";

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <Link href={`todos/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// the getStaticProps function is used for static site generation (SSG) and allows you to pre-fetch data during build time.
// It's will  excuted first by Next.js the pass props into Page component. Will ignore in code bundle an client side
export async function getStaticProps() {
  // any code in there only excuted on server sider to prepare pre-render
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok)
    return {
      redirect: {
        destination: "/error",
      },
    };
  const dataTodos = await res.json();
  if (!dataTodos) return { notFound: true };

  return {
    props: {
      todos: dataTodos,
    },
    revalidate: 10,
  };
}

async function getStaticPaths() {}

export default TodoList;
