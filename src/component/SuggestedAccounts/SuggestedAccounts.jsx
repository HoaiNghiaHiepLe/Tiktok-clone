import React from "react";
import PropTypes from "prop-types";
import { AccountItem } from ".";

import * as S from "./styles";

const SuggestedAccounts = ({ label, hidePreview = false, accounts }) => {
  return (
    <S.SuggestedAccountWrapper>
      <p className="label">{label}</p>
      {accounts.map((account) => (
        <AccountItem key={account.id} hidePreview={hidePreview} />
      ))}
      <button className="more_btn">
        <p>See all</p>
      </button>
    </S.SuggestedAccountWrapper>
  );
};

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  hidePreview: PropTypes.bool,
};
export default React.memo(SuggestedAccounts);
