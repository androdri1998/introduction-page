import styled from "styled-components";

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction column;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 20px;
`;

export const TextName = styled.p`
  font-weight: bold;
  font-size: 2.2em;
  color: white;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 1.2em;
  color: white;
`;

export const SeeMore = styled.span`
  font-size: 1em;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
`;

export const LineDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
