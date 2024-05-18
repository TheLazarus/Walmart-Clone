import { Result } from "@/typings/searchTypings";

async function fetchSearch(searchTerm: string) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  const url = new URL(`https://www.walmart.com/search?q=${searchTerm}`);

  const body = {
    source: "universal_ecommerce",
    url: url.toString(),
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
    });
    const res = await response.json();
    console.log(res);
    if (!res?.results?.length) return;

    const result: Result = res.results[0];

    return result;
  } catch (error) {
    console.log(error);
  }
}

export default fetchSearch;
