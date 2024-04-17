import Link from "next/link";
import { getDataProducts } from "../../server/server";

function ProductsList({ products }) {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <Link href={`products/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
// SSG: (pre-renders the page HTML on the server ahead of each request, such as at build time.)
// the getStaticProps function is used for static site generation (SSG) and allows you to pre-fetch data during build time.
// It's will  excuted first by Next.js the pass props into Page component. Will ignore in code bundle an client side
export async function getStaticProps() {
  // any code in there only excuted on server sider to prepare pre-render
  const dataProduct = await getDataProducts();

  return {
    props: {
      products: dataProduct.products, //will receive `products` as a prop at build time
    },
    revalidate: 10, // after 10s will re-fetching data(re-generatiob page) after deploy
  };
}

export default ProductsList;
