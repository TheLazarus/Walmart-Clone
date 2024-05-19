import Product from "@/components/Product";
import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage(props: Props) {
  const { searchParams } = props || {};
  const { q } = searchParams || {};

  const results = await fetchSearch(q);
  console.log(results);
  // Fetch the search results

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Results for {q}</h1>
      <h2 className="text-md font-light lette">
        ({results?.content.total_results} results)
      </h2>
      <ul>
        {results?.content?.organic.map((product) => {
          return (
            <li key={product.product_id}>
              <Product product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SearchPage;
