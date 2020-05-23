import styled from "styled-components";

export const ItemExperience = styled.article`
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

export const Name = styled.p`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: white;
  margin-top: ${(props) => props.marginTop || "0"};
`;

export const SeeMore = styled.span`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
`;
