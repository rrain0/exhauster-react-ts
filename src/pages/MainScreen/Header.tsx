import DocumentIc from "src/components/icons/DocumentIc";
import styled from "styled-components";
import {StyledCommon} from "src/style/styled-common";
import rowWrap = StyledCommon.rowWrap;
import center = StyledCommon.center;




const Header = ()=>{
  
  return <Frame>
    <IconBox><Icon/></IconBox>
    <Title>Главный экран</Title>
  </Frame>
}
export default Header

const Frame = styled.div`
  width: 100%;
  height: fit-content;
  background: #FAFAFA;
  border-bottom: 1px solid #EAEAEA;
  ${rowWrap};
  padding: 7px 14px;
  align-items: center;
  gap: 7px 14px;
`
const IconBox = styled.div`
  width: 26px;
  height: 26px;
  background: #FAB82E;
  border-radius: 4px;
  ${center}
`
const Icon = styled(DocumentIc).attrs({
  mainColor: '#FFE3B4'
})`
  width: 12px;
`
const Title = styled.h2`
  font: 500 14px/129% Roboto;
  color: black;
`