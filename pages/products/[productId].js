import fs from "node:fs/promises";
import path from "path";
import { getDataProducts } from "../../server/server";
function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

// tell with Next this is page should be pre-generated
export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.productId;

  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  if (!jsonData) return { redirect: { destination: "/error" } };

  const dataProduct = JSON.parse(jsonData);
  if (!dataProduct) return { notFound: true };

  const product = dataProduct.products.find((pr) => pr.id === productId);

  return {
    props: {
      product,
    },
    revalidate: 10,
  };
}

// this function apply for dynamic page with dynamic path segment
export async function getStaticPaths() {
  const dataProducts = await getDataProducts();
  const idArr = dataProducts.products.map((pr) => pr.id);
  const paramsArr = idArr.map((id) => ({ params: { productId: id } }));

  // console.log("static generated------------------");

  return {
    paths: paramsArr,
    fallback: false, // fallback: false means pages that don’t have the correct id will 404.
    //fallback: "blocking",  when finished fetching data for another route, it's will display function page component
  };
}

export default ProductDetail;
