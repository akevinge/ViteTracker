import React from "react";
import "./AmazonItem.css";

export default function AmazonItem({ n }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(n);
    await fetch("http://localhost:5001/amazon/delete", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: sessionStorage.getItem("userId"),
        url: n.url,
      }),
    });
    const resp = await fetch("http://localhost:5001/amazon/list", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: sessionStorage.getItem("userId"),
      }),
    }).then((response) => {
      return response.json();
    });
    sessionStorage.setItem(
      "amazon-list",
      JSON.stringify({ "amazon-list": resp.amazon })
    );
    window.location.reload();
  };

  return (
    <li className="userdash-item-wrap" key={n.url}>
      <div className="a-item-img-wrap">
        <img
          className="a-item-img"
          src={`data:image/png;base64,${n.imgUrl}`}
          alt=""
        ></img>
      </div>
      <div className="a-item-info">
        <h3 className="a-item-title">{n.title}</h3>
        <h5 className="a-item-price">{`Price: ${n.price}`}</h5>
        <button
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
