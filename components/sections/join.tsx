import LayoutSection from "../layouts/layout-section";
import Highlight from "../highlight";
import Button from "../button";

type Props = {};

const Join = (props: Props) => {
  return (
    <LayoutSection>
      <div className="w-4/5 flex flex-col mx-auto bg-cardHover p-12 border-b-4 border-b-primary">
        <div className="flex flex-col md:flex-row mb-8">
          <h2>
            Join the <Highlight text="community" /> around the world
          </h2>
          <p>
            A custom environment designed especially for developing and
            facilitating React, Vue, Angular, and other.
          </p>
        </div>
        <Button variant="transparent">join community</Button>
      </div>
    </LayoutSection>
  );
};

export default Join;
