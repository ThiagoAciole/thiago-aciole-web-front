import { Flex } from "@radix-ui/themes";

import { CardContainer, LineExperience } from "../../components";
import EXPERIENCES from "../../constants/experience";
import { Line } from "./styled";
import { RiBriefcase4Fill } from "@remixicon/react";

export const Experience = () => {
  return (
    <CardContainer title={"Experience"} icon={<RiBriefcase4Fill size={16} />}>
      <Flex gap="4" direction={"column"} style={{ padding: 4 }}>
        {EXPERIENCES.map((exp, index) => (
          <>
            {index !== 0 && <Line />}
            <LineExperience
              job={exp.title}
              company={exp.company}
              date={exp.date}
              icon={exp.icon}
            />
          </>
        ))}
      </Flex>
    </CardContainer>
  );
};
