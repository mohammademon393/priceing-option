import React from "react";

const Links = ({ raout }) => {
  return (
  <div>
    <li><a href={raout.path}></a> {raout.name}</li>
  </div>)
};

export default Links;
