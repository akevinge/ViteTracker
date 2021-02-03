import React from "react";
import "./UserDashboard.css";
export const UserDashboard = () => {
  let amazonList = (function (x = sessionStorage.getItem("amazon-list")) {
    const x1 = JSON.parse(x);
    return x1.amazonList;
  })();
  return (
    <>
      <div className="tracker-nav"></div>
      <div className="userdash-wrap">
        {amazonList.map((n) => (
          <li>
            <h3>{n.title}</h3>
            <h5>{n.price}</h5>
            <img src={`data:image/png;base64,${n.imgUrl}`} alt=""></img>
          </li>
        ))}
      </div>
    </>
  );
};
