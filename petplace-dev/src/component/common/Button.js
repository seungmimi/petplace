import styled from "styled-components";

export const BasicBtn = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${(props) => (props.$line ? "#fff" : "var(--color-main1)")};
  color: ${(props) => (props.$line ? "var(--text-2)" : "#fff")};
  font-weight: 600;
  border-radius: 5px;
  text-align: center;
  border: ${(props) => (props.$line ? "1px solid #3F3D56" : "none")};
`;
