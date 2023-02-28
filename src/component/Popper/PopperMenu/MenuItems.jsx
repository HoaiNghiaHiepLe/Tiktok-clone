import React, { useState } from "react";

import Button from "~/component/Button";

const MenuItems = ({ data, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="menu_items"
      prefixIcon={data.icon}
      to={data.to}
    >
      {data.title}
    </Button>
  );
};

export default MenuItems;
