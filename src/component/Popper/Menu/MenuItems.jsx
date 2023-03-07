import React, { useState } from "react";

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

export default MenuItems;
