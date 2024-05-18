import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className="">
      <div className=" grid grid-cols-1 md:grid-cols-4 grid-flow-row-dense gap-6 m-6">
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32 "
        />
        <GridOption
          title="Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          className=" h-fullbg-blue-100 col-span-2 row-span-2"
        />
        <GridOption
          title="Shop Home"
          image="https://links.papareact.com/szu"
          className="h-full  bg-pink-200 row-span-2"
        />
        <GridOption
          title="Shop Electronics"
          image="https://links.papareact.com/n7r"
          className="h-full md:h-32  bg-yellow-100"
        />
        <GridOption
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-pink-200 h-full md:h-32 col-span-2"
        />
        <GridOption
          title="All you need for match day"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full row-span-2"
        />
        <GridOption
          title="Shop Gadgets"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full row-span-2"
        />
        <GridOption
          title="Shop Beauty"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full row-span-2"
        />
      </div>
    </main>
  );
}
