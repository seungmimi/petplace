import styled from "styled-components";

export const BasicInput = styled.input`
  width: 100%;
  height: 47px;
  padding: 12px 10px;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  color: #3F3D56;
  &::placeholder{
		color: #AAA;
	}
`

export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-weight: bold;
  color: #3F3D56;
`