import { ProductContent } from "@/typings/productTypings";
import { Result } from "@/typings/searchTypings";

async function fetchProduct(url: string) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  const newUrl = new URL(`https://www.walmart.com${url}`);
  console.log("Scraping....", newUrl);

  const body = {
    source: "universal_ecommerce",
    url: newUrl,
    geo_location: "United States",
    parse: true,
  };

  try {
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    });
    const res = await response.json();
    console.log(res);
    if (!res?.results?.length) return;

    const result: ProductContent = res.results[0];

    return result.content;
  } catch (error) {
    console.log(error);
  }
}

export default fetchProduct;
