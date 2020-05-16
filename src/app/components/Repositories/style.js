import styled from "styled-components";

export const ContainerRepositories = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ItemRepository = styled.article`
  border-bottom: solid 1px #cfd8dc;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: #01579b;
`;

export const TitleDescriptionRepository = styled.p`
  font-size: 20px;
  color: gray;
`;

export const Description = styled.p`
  font-size: 14px;
  color: gray;
  margin-right: 20px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
`;
