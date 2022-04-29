import {
  KeywordDeleteAllButton,
  KeywordMenu,
  KeywordMenuHeader, KeywordsContainer,
  KeywordTitle,
  SearchBarContainer,
  SearchBarInput
} from './SearchBarStyles'

import react, {useState, useRef} from 'react';
import Keyword from './Keyword'

const SearchBar = (props) => {

  const [openRecentSearch, setOpenRecentSearch] = useState(false);
  const keywordMenu = useRef();
  const searchBarInput = useRef();

  const onFocusInput = (e) => {
    setOpenRecentSearch(true);
  }

  const onBlurInput = (e) => {
    // if(e.target.vau)
    console.log(e);
    console.log(e.target.value);
    setOpenRecentSearch(false);
  }

  const onKeywordMenuClick = (e) => {
    // if(ref.current.)
    console.log('test');
    console.log(keywordMenu.current);
  }

  return(
    <SearchBarContainer>
      <SearchBarInput
        placeholder={'어떤 내용이 궁금하신가요?'}
        onBlur={e=>onBlurInput(e)}
        onFocus={onFocusInput}
        ref={searchBarInput}
      />
      <KeywordMenu ref={keywordMenu} isOpen={openRecentSearch} onClick={onKeywordMenuClick}>
        <KeywordMenuHeader>
          <KeywordTitle>최근검색어</KeywordTitle>
          <KeywordDeleteAllButton>전체 삭제</KeywordDeleteAllButton>
        </KeywordMenuHeader>
        {/*
          키워드는 최대 2줄 까지
        */}
        <KeywordsContainer>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
          <Keyword name={'test'}></Keyword>
        </KeywordsContainer>
      </KeywordMenu>
    </SearchBarContainer>
  )
}

export default SearchBar;