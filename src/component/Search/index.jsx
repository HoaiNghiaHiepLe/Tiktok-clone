import { useEffect, forwardRef, useState, useRef } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { PopperWrapper } from "~/component/Popper";
import PopperAccountItem from "../PopperAccountItem";
import { LoadingCircleIcon, ResetSearchIcon, SearchIcon } from "../Icons";
import * as S from "./styles";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();
  const handleClearInput = (e) => {
    console.log(e.target.value);
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <S.SearchWrapper>
      <HeadlessTippy
        onClickOutside={() => handleHideResult()}
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="search_result" tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className="search_title">Account</div>
              <PopperAccountItem />
              <PopperAccountItem />
              <PopperAccountItem />
            </PopperWrapper>
          </div>
        )}
      >
        <div className="header_search">
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="search accounts and videos"
            spellCheck={false}
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setSearchValue(e.target.value);
            }}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button className="clear_btn" onClick={(e) => handleClearInput(e)}>
              <ResetSearchIcon className="clear_icon" />
            </button>
          )}
          {/* <LoadingCircleIcon className="loading_icon" /> */}

          <button className="search_btn">
            <SearchIcon className="search_icon" />
          </button>
        </div>
      </HeadlessTippy>
    </S.SearchWrapper>
  );
};

export default Search;
