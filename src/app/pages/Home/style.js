import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const ContaineBody = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.15);
  flex: 1;
  flex-direction: column;
  border-radius: 30px 30px 0 0;
  padding: 20px;
  overflow-y: auto;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const TextName = styled.p`
  font-weight: bold;
  font-size: 1.8em;
  color: white;
`;
