import LayoutSection from "../layouts/layout-section";
import { services } from "@/data/data";
import Button from "../button";
import ReadMore from "../read-more";
import clsx from "clsx";
import Container from "../layouts/container";

type Props = {};

const Services = (props: Props) => {
  const cardClass = clsx(
    "py-10 px-8 border-b-4 border-b-transparent transition duration-300",
    "hover:border-b-primary hover:bg-cardHover"
  );

  return (
    <LayoutSection>
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          {services.map((service, id) => (
            <div key={id} className={cardClass}>
              <h3>{service.name}</h3>
              <p className="mb-8 mt-2">{service.description}</p>
              <ReadMore href="#" />
            </div>
          ))}
        </div>

        <Button variant="transparent">Explore More Services</Button>

      </Container>
    </LayoutSection>
  );
};

export default Services;
