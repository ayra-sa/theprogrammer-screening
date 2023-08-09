import { supportingteam } from "@/data/data";
import LayoutSection from "../layouts/layout-section";
import ImageItem from "../image-item";
import Container from "../layouts/container";

type Props = {};

const Supporting = (props: Props) => {
  return (
    <LayoutSection>
      <Container>
        <p className="uppercase text-sm opacity-50 text-center">
          Providing power to the world&apos;s best product teams.
        </p>
        <div className="grid grid-cols-3 gap-5 md:gap-x-20 md:flex justify-between mt-12 items-center">
          {supportingteam.map((team) => (
            <ImageItem
              key={team.name}
              src={team.logo}
              alt={team.name}
              variant="full"
            />
          ))}
        </div>
      </Container>
    </LayoutSection>
  );
};

export default Supporting;
