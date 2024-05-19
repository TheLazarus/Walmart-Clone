import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 p-10 h-full">
      <Skeleton className="h-[400px] width-[300px]" />
      <Skeleton className="h-[400px] width-[300px]" />
      <Skeleton className="h-[400px] width-[300px]" />
      <Skeleton className="h-[400px] width-[300px]" />
      <Skeleton className="h-[400px] width-[300px]" />
      <Skeleton className="h-[400px] width-[300px]" />
      <Skeleton className="h-[400px] width-[300px]" />
      <Skeleton className="h-[400px] width-[300px]" />
    </div>
  );
}

export default Loading;
