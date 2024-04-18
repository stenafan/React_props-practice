import React from "react";

function Avatar(props) {
  return (
    <div>
      <img src={props.imgURL} className="circle-img" alt="avatar_img" />
    </div>
  );
}

export default Avatar;
