import {
  SkillWrapper,
  Icon,
  InfoWrapper,
  StackText,
  SkillProgress,
} from "./styles";

interface LineSkillProps {
  stack: string;
  value: number;
  icon: string;
}

export const LineSkill = ({ stack, value, icon }: LineSkillProps) => {
  return (
    <SkillWrapper>
      <Icon src={icon} alt={stack} />
      <InfoWrapper>
        <StackText as="div">{stack}</StackText>
        <SkillProgress value={value} max={100} color="violet" />
      </InfoWrapper>
    </SkillWrapper>
  );
};
