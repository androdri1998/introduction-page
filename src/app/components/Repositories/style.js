import styled from "styled-components";

export const ContainerRepositories = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const TitleDescriptionRepository = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.87);
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SeeMore = styled.span`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
`;

export const Observations = styled.span`
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-self: center;
`;
