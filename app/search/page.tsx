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

  return <h1>Search Page</h1>;
}

export default SearchPage;
