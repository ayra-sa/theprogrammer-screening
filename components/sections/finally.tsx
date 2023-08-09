import Highlight from "../highlight";
import ImageItem from "../image-item";
import Container from "../layouts/container";
import LayoutSection from "../layouts/layout-section";

type Props = {};

const Finally = (props: Props) => {
  return (
    <LayoutSection>
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:items-center">
          <div className="w-full md:w-3/5">
            <h2 className="mb-10">
              Finally you can develop
              <Highlight text="full-stack" /> web
              applications in one place.
            </h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud ame
            </p>
          </div>

          <div className="w-full md:w-2/5 flex justify-center">
            <ImageItem src="/fullstack.png" alt="full-stack" variant="full" />
          </div>
        </div>
      </Container>
    </LayoutSection>
  );
};

export default Finally;
