import {
  ExperienceWrapper,
  CompanyAvatar,
  InfoWrapper,
  HeaderWrapper,
  CompanyName,
  DateText,
  JobText,
} from "./styles";

interface LineExperienceProps {
  job: string;
  company: string;
  icon: string;
  date: string;
}

export const LineExperience = ({ job, icon, company, date }: LineExperienceProps) => {
  return (
    <ExperienceWrapper>
      <CompanyAvatar
        size="4"
        src={icon}
        alt={company}
        radius="full"
        fallback={company.charAt(0).toUpperCase()}
      />

      <InfoWrapper>
        <HeaderWrapper>
          <CompanyName as="div">{company}</CompanyName>
          <DateText as="div"> {date} </DateText>
        </HeaderWrapper>

        <JobText as="div">{job}</JobText>
      </InfoWrapper>
    </ExperienceWrapper>
  );
};
