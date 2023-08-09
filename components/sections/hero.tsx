import Button from "../button";
import Image from "next/image";
import Highlight from "../highlight";
import Container from "../layouts/container";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="pt-[35%] md:pt-[15%]">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16 mb-14">
          <div className="flex-1">
            <h1>
              Expert Developers for a Connected <Highlight text="World" />
            </h1>
          </div>
          <Button variant="secondary">get a demo</Button>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-16 mb-32">
          <Button variant="primary">watch a video</Button>
          <div className="flex-1">
            <p>Circle is a code development platform that gives innovators the speed and reliability they need to create at the speed of inspiration.</p>
          </div>
        </div>

        <Image src='/hero.png' width={0} height={0} sizes="100vw" className="w-full h-auto" alt="hero image" />
      </Container>
    </div>
  );
};

export default Hero;
