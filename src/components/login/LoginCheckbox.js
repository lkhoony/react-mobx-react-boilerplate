import react, {useState} from 'react'
import { CheckboxImage, CheckboxInput, CheckboxLabel, CheckboxWrap } from './LoginCheckboxStyles'
const LoginCheckbox = (props) => {

  const {value, onClick, label} = props;

  return(
    <CheckboxWrap>
      <CheckboxInput type={'checkbox'} isChecked={value}></CheckboxInput>
      <CheckboxImage onClick={onClick} isChecked={value}></CheckboxImage>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrap>
  )
}

export default LoginCheckbox;