import {NotificationMessageWrap, NotificationMessageIcon, NotificationMessageTitle, NotificationMessageDesc} from './NotificationMessageStyles'

const NotificationMessage = (props) => {

  /*
  props : 언급한 사람, 게시글 id, type
   */
  const {type} = props;

  return(
    <NotificationMessageWrap>
      <NotificationMessageIcon></NotificationMessageIcon>
      <NotificationMessageDesc>또로롱님이 댓글에서 회원님을 언급했어요.</NotificationMessageDesc>
    </NotificationMessageWrap>
  )
}

export default NotificationMessage;