import LayoutSection from "../layouts/layout-section";
import ImageItem from "../image-item";
import Button from "../button";
import Highlight from "../highlight";

type Props = {};

const Useful = (props: Props) => {
  return (
    <LayoutSection>
      <h2 className="text-center">
        Useful <Highlight text="software" /> that can assist.
      </h2>

      <div className="my-12">
        <ImageItem src="/software-1.png" alt="software" variant="full" />
        <ImageItem src="/software-2.png" alt="software" variant="full" />
      </div>

      <div className="flex justify-center">
        <Button variant="primary">see full software</Button>
      </div>
    </LayoutSection>
  );
};

export default Useful;
