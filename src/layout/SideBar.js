import { SideBarContainer, ProfileWrap, ProfileSection, ProfileImg, ProfileName, ProfileDpt, GroupWrap, GroupTitle, GroupList } from './SideBarStyles'

const SideBar = (props) => {

  return(
    <SideBarContainer>
      <ProfileWrap>
        <ProfileSection>
          <ProfileImg></ProfileImg>
        </ProfileSection>
        <ProfileSection>
          <ProfileName>코오롱 닉네임</ProfileName>
          <ProfileDpt>코오롱베니트</ProfileDpt>
        </ProfileSection>
      </ProfileWrap>
      <GroupWrap>
        <GroupTitle>참여중인 그룹</GroupTitle>
        <GroupList>기획자들 모여라</GroupList>
        <GroupList>주임들의 모임</GroupList>
        <GroupList>드림워커스 12기</GroupList>
        <GroupList>주식으로 대박나자</GroupList>
      </GroupWrap>

    </SideBarContainer>
  )
}

export default SideBar;