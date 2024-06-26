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
      <h2 className="text-md font-light">
        ({results?.content.total_results} results)
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
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
