import { RiMapPinLine, RiBuildingLine } from "@remixicon/react";
import { AvatarProfiler, ButtonGroup, CardContainer } from "../../components";
import PROFILER from "../../constants/profiler";
import {
  ProfilerWrapper,
  NameWrapper,
  NameText,
  IdText,
  DescriptionText,
  InfoWrapper,
  InfoItem,
  InfoText,
} from "./styles";

export const Profiler = () => {
  return (
    <CardContainer>
      <ProfilerWrapper>
        <AvatarProfiler />

        <NameWrapper>
          <NameText as="div">{PROFILER.name}</NameText>
          <IdText as="div">{PROFILER.id}</IdText>
        </NameWrapper>

        <DescriptionText as="div">{PROFILER.description}</DescriptionText>

        <InfoWrapper>
          <InfoItem>
            <RiBuildingLine size={16} />
            <InfoText as="div">{PROFILER.company}</InfoText>
          </InfoItem>

          <InfoItem>
            <RiMapPinLine size={16} />
            <InfoText as="div">{PROFILER.local}</InfoText>
          </InfoItem>
        </InfoWrapper>

        <ButtonGroup />
      </ProfilerWrapper>
    </CardContainer>
  );
};
