import react,{useState} from 'react';
import { KeywordName, KeywordContainer } from './KeywordStyles'
import IconButton from '../global/IconButton'

const Keyword = (props) => {

  const { onClick=null, onDelete = null, name='베니트'} = props;

  return(
    <KeywordContainer onClick={onClick}>
      <KeywordName>{name}</KeywordName>
      <IconButton onClick={onDelete} width={'10px'} height={'18px'} />
    </KeywordContainer>
  )
}

export default Keyword;