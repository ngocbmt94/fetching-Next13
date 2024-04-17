import fs from "node:fs/promises";
import path from "path";

export async function getDataProducts() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath);
  const dataProduct = JSON.parse(jsonData);

  return dataProduct;
}
