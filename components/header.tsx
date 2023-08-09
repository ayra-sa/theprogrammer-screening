import Link from "next/link";
import { navbarMenu } from "@/data/data";
import Button from "./button";
import Image from "next/image";
import clsx from "clsx";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="fixed z-10 bg-navbar left-[5%] right-[5%] top-5 backdrop-blur-2xl py-3 md:py-7 px-4 md:px-8 uppercase">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="#">
            <Image src="/logo.png" alt="logo" width={140} height={24} />
          </Link>

          <ul className="hidden md:flex gap-x-5">
            {navbarMenu.map((menu) => (
              <li
                key={menu.menu}
                className={clsx(
                  "text-sm transition duration-300",
                  "hover:text-white"
                )}
              >
                <Link href={menu.link}>{menu.menu}</Link>
              </li>
            ))}
          </ul>

          <Button variant="transparent">sign up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
