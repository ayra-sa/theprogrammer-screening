import { footerContent } from "@/data/data";
import Link from "next/link";
import clsx from "clsx";
import Container from "./layouts/container";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-footer py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {footerContent.map((content) => (
            <div key={content.label}>
              <p className="text-xl leading-8 mb-6 text-white">
                {content.label}
              </p>
              <ul>
                {content.footerMenu.map((menu, id) => (
                  <li
                    key={id}
                    className={clsx(
                      "uppercase text-footerText text-sm mb-3 transition duration-300",
                      "hover:text-white"
                    )}
                  >
                    <Link href={menu.link}>{menu.menu}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
