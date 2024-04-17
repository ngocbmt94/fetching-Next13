import { useEffect, useState } from "react";
import useSWR from "swr";

// combine pre-fetching data with client-fetching data
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL_EXAMPLE = "https://nextjs-fetching-ed961-default-rtdb.firebaseio.com/sales.json";
function formatData(data) {
  const transform = [];
  for (const i in data) {
    transform.push(data[i]);
  }

  return transform;
}

function Sales({ initSales }) {
  const [sales, setSales] = useState(initSales);
  const { data, error, isLoading } = useSWR(URL_EXAMPLE, fetcher);

  useEffect(() => {
    const covertData = formatData(data);
    setSales(covertData);
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data && !initSales) return <div>loading...</div>;

  return (
    <ul>
      {sales.map((sale, i) => (
        <li key={i}>
          <h1>
            {sale.userName} - <em>{sale.volume}</em>
          </h1>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(URL_EXAMPLE);
  const data = await res.json();
  const covertData = formatData(data);

  return {
    props: {
      initSales: covertData,
    },
  };
}
export default Sales;
