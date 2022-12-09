import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  min-height: 100vh;
`
export const FormAndImageContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 30px;
  }
`
export const GenerateMeme = styled.div`
  width: 100%;
  background-image: url(${props => props.backgroundImage});
  height: 300px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  order: 0;
  @media screen and (min-width: 768px) {
    order: 1;
    height: 500px;
  }
`
export const DisplayText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-family: 'Open Sans';
  font-weight: 500;
`

export const MemeHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 28px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    .margin-top: 0px;
  }
`
export const Label = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 15px;
  font-weight: 600;
  align-self: flex-start;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: 1px solid #5a7184;
  border-radius: 5px;
  font-size: 16px;
  color: #1e293b;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const Select = styled.select`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: 1px solid #5a7184;
  border-radius: 5px;
  color: #1e293b;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const Option = styled.option`
  font-size: 18px;
  color: #1e293b;
  font-family: 'Open Sans';
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  font-family: 'Open Sans';
  width: 150px;
  margin-top: 20px;
`
