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

export const ItemExperience = styled.article`
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 20px;
`;

export const Name = styled.p`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

export const TitleDescriptionExperience = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.87);
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: ${(props) => props.marginBottom || "0"};
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
