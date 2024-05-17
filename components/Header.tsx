"use client";

import { Grid2X2, Heart, Search, ShoppingBasket, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

function Header() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };

  return (
    <header className="flex flex-col md:flex-row bg-walmart px-10 py-7 space-x-5 items-center">
      <Link href="/" className="mb-5 md:mb-0">
        <Image
          src="https://i.imgur.com/5V4wehM.png"
          alt="logo"
          width={150}
          height={150}
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
          type="text"
          name="input"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0">
        <Link
          href="/"
          className="hideen xl:flex text-white items-center space-x-2 text-sm hidden"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href="/"
          className="xl:flex text-white items-center space-x-2 text-sm hidden"
        >
          <Grid2X2 size={20} />
          <p>Services</p>
        </Link>

        <Link
          href="/"
          className="flex text-white items-center space-x-2 text-sm"
        >
          <Heart />
          <div className="text-center">
            <p className="font-extralight">Reorder</p>
            <p className="font-bold">My Items</p>
          </div>
        </Link>

        <Link
          href="/"
          className="flex  text-white items-center space-x-2 text-sm"
        >
          <User />
          <div className="text-center">
            <p className="font-extralight">Sign In</p>
            <p className="font-bold">Account</p>
          </div>
        </Link>
        <Link
          href="/basket"
          className="flex  text-white items-center space-x-2 text-sm"
        >
          <ShoppingBasket />
          <div className="text-center">
            <p className="font-extralight">No Items</p>
            <p className="font-bold">$0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
}
export default Header;
