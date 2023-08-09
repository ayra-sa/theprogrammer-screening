import LayoutSection from "../layouts/layout-section";
import Button from "../button";
import Highlight from "../highlight";
import ImageItem from "../image-item";
import Container from "../layouts/container";

type Props = {};

const Circle = (props: Props) => {
  return (
    <LayoutSection>
      <Container>
        <h2>
          Circle provides teams and individuals with customizable{" "}
          <Highlight text="management tools" /> for your source code.
        </h2>
      </Container>
      <div className="flex flex-col md:flex-row mt-12 gap-12 px-5 md:px-0">
        <div className="w-full md:w-1/2 md:pl-[3%]">
          <p>
            Create issues, sections into tasks, track relationships, add custom
            spaces, and initiate discussions. Visualize large projects with
            spreadsheets or codeboards, and use the help of code systems to
            automate everything.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <Button variant="primary">watch a video</Button>
            <Button variant="secondary">get a demo</Button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <ImageItem
            src="/customizable.png"
            alt="customizable"
            variant="full"
          />
        </div>
      </div>
    </LayoutSection>
  );
};

export default Circle;
