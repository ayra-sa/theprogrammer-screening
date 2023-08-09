import Image from "next/image";
import Link from "next/link";

type Props = {
  href: string;
};

const ReadMore = ({ href }: Props) => {
  return (
    <Link href={href} className="items-center gap-x-2 uppercase text-sm inline-flex">
      read more{" "}
      <Image src="/arrow-icon.svg" alt="arrow icon" width={10} height={10} />
    </Link>
  );
};

export default ReadMore;
