import {IconWrap, IconImg} from './IconButtonStyles'

const IconButton = (props) => {

  const {onClick=null, width='12px', height='12px', src=''} = props;

  return(
    <IconWrap width={width} height={height} onClick={onClick}>
      <IconImg src={src}/>
    </IconWrap>
  )
}

export default IconButton;