import React from "react";
import { Link } from "react-router-dom";

function HeaderItem({ name, Icon, link }) {
  return (
    <Link
      to={link}
      className="text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2"
    >
      {" "}
      <Icon /> <h2 className="text-sm">{name}</h2>
    </Link>
  );
}

export default HeaderItem;
