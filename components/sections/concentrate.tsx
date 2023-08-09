import LayoutSection from "../layouts/layout-section";
import { issues } from "@/data/data";
import ReadMore from "../read-more";
import ImageItem from "../image-item";
import Highlight from "../highlight";
import Container from "../layouts/container";

type Props = {};

const Concentrate = (props: Props) => {
  return (
    <LayoutSection>
      <Container>
        <div className="text-center">
          <h2 className="mb-5">
            Concentrate on <Highlight text="larger" />
            issues.
          </h2>
          <p>
            Spend less time on repetitive code patterns and more time on what
            really matters building great software.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-12">
          {issues.map((issue, id) => (
            <div key={id} className="issue-card pt-10 px-8">
              <h3>{issue.name}</h3>
              <p className="mb-8 mt-2">{issue.description}</p>
              <ReadMore href="#" />
              <div className="mt-8 flex justify-center">
                <ImageItem src={issue.image} alt={issue.name} variant="full" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </LayoutSection>
  );
};

export default Concentrate;
