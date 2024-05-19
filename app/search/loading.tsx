import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Scraping Results</h1>
      <h2 className="mb-5 text-gray-400">It won't be long bruh...</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Skeleton className="w-[400px] h-[300px]" />
        <Skeleton className="w-[400px] h-[300px]" />
        <Skeleton className="w-[400px] h-[300px]" />
        <Skeleton className="w-[400px] h-[300px]" />
        <Skeleton className="w-[400px] h-[300px]" />
        <Skeleton className="w-[400px] h-[300px]" />
        <Skeleton className="w-[400px] h-[300px]" />
        <Skeleton className="w-[400px] h-[300px]" />
      </div>
    </div>
  );
};

export default Loading;
