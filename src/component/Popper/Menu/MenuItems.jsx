import React from "react";
import PropTypes from "prop-types";

import Button from "~/component/Button";

const MenuItems = ({ data, onClick, className }) => {
  return (
    <Button
      $separate={data.separate ? true : undefined}
      onClick={onClick}
      className={className}
      prefixIcon={data.icon}
      to={data.to}
    >
      {data.title}
    </Button>
  );
};

MenuItems.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
export default MenuItems;
