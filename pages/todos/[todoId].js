import { notFound } from "next/navigation";

function TodoDetail({ todo }) {
  if (!todo) return <h1>loading....</h1>;
  return (
    <div>
      Detail todo of {todo.id}
      <em>{todo.title}</em>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const todoId = params.todoId;

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  if (!res.ok)
    return {
      redirect: {
        destination: "/error",
      },
    };
  const todo = await res.json();

  if (!todo) return { notFound: true }; // if could be not fetching data with some id, need return 404
  return {
    props: {
      todo: todo,
    },
  };
}

export async function getStaticPaths() {
  return { paths: [{ params: { todoId: "1" } }], fallback: true };
  // todoId : '1' : onbly pre-fechting data for this page with params  has id
  // true: is delay to load another page with different id, it will fetching data when reach of routing
}

export default TodoDetail;
