import react, {useState, useRef} from 'react'
import {InputWrap, InputFiled, ClearButton} from './LoginInputStyles'

const LoginInput = (props) => {

  const {value, clear, onChange} = props;

  const [isFocus, setIsFocus] = useState(false);
  const textInput = useRef(null);

  const onClick = (e) => {
    setIsFocus(true);
    textInput.current.focus();
  }

  const onBlur = (e) => {
    setIsFocus(false);
  }

  const onClear = (e) => {
    e.stopPropagation();
    clear();
  }

  return(
    <InputWrap onClick={onClick} isFocus={isFocus}>
      <InputFiled
        ref={textInput}
        onBlur={onBlur}
        value={value}
        onChange={onChange}></InputFiled>
      <ClearButton onClick={onClear} isDisplay={value!=='' ? true : false}></ClearButton>
    </InputWrap>
  )
}

export default LoginInput;