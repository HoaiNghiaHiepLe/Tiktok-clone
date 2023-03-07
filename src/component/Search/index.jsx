import { useEffect, useState, useRef } from "react";

import * as searchService from "~/apiService/searchService";
import HeadlessTippy from "@tippyjs/react/headless";
import { PopperWrapper } from "~/component/Popper";
import PopperAccountItem from "../PopperAccountItem";
import { LoadingCircleIcon, ResetSearchIcon, SearchIcon } from "../Icons";
import { useDebounce } from "~/hooks";

import * as S from "./styles";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounced]);

  const handleClearInput = (e) => {
    console.log(e.target.value);
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleInputChange = (e) => {
    const searchValue = e.target.value.trimStart();
    setSearchValue(searchValue);
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    // solve tippy warnings by wrapping with a div
    <S.SearchWrapper>
      <HeadlessTippy
        onClickOutside={() => handleHideResult()}
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="search_result" tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className="search_title">Account</div>
              {searchResult.map((result) => (
                <PopperAccountItem key={result.id} data={result} />
              ))}
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
              handleInputChange(e);
            }}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className="clear_btn" onClick={(e) => handleClearInput(e)}>
              <ResetSearchIcon className="clear_icon" />
            </button>
          )}
          {loading && <LoadingCircleIcon className="loading_icon" />}
          <button
            className="search_btn"
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon className="search_icon" />
          </button>
        </div>
      </HeadlessTippy>
    </S.SearchWrapper>
  );
};

export default Search;
