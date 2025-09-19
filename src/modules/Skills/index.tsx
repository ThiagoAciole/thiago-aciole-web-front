import { Flex, Tabs } from "@radix-ui/themes";
import { CardContainer, LineSkill } from "../../components";
import { frontend, backend, design } from "../../constants/skills";
import { RiBarChartBoxAiFill } from "@remixicon/react";

export const Skills = () => {
  const labels = [
    {
      id: "frontend",
      name: "Frontend",
    },
    {
      id: "backend",
      name: "Backend",
    },
    {
      id: "design",
      name: "Design",
    },
  ];

  return (
    <CardContainer title={"Skills"} icon={<RiBarChartBoxAiFill size={16} />}>
      <Tabs.Root defaultValue="frontend">
        <Tabs.List justify="center" color="violet" style={{ marginBottom: 16 }}>
          {labels.map((label) => (
            <Tabs.Trigger value={label.id}>{label.name}</Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="frontend">
          <Flex gap="6" direction="column" style={{ padding: 4 }}>
            {frontend.map((skill, index) => (
              <LineSkill
                key={index}
                stack={skill.stack}
                value={skill.value}
                icon={skill.icon}
              />
            ))}
          </Flex>
        </Tabs.Content>

        <Tabs.Content value="backend">
          <Flex gap="6" direction="column" style={{ padding: 4 }}>
            {backend.map((skill, index) => (
              <LineSkill
                key={index}
                stack={skill.stack}
                value={skill.value}
                icon={skill.icon}
              />
            ))}
          </Flex>
        </Tabs.Content>

        <Tabs.Content value="design">
          <Flex gap="6" direction="column" style={{ padding: 4 }}>
            {design.map((skill, index) => (
              <LineSkill
                key={index}
                stack={skill.stack}
                value={skill.value}
                icon={skill.icon}
              />
            ))}
          </Flex>
        </Tabs.Content>
      </Tabs.Root>
    </CardContainer>
  );
};
