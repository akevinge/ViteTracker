import React, { useState, useEffect } from "react";
import "./AddAmazon.css";
import svg from "../images/loader.svg";
export default function AddAmazon() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [urlErr, setUrlErr] = useState("");
  useEffect(() => {
    document.querySelector(".aa-input").focus();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.startsWith("https://www.amazon.com/")) {
      setUrlErr("Invalid Url");
    } else {
      setLoading(true);
      const response = await fetch("http://localhost:5001/amazon/add", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: sessionStorage.getItem("userId"),
          url: url.trim(),
        }),
      }).then((response) => {
        const text = response.text();
        return text;
      });
      if (response === "dupe") {
        setUrlErr("Item Already Added");
        setLoading(false);
      } else if (response === "max") {
        setUrlErr("Cannot add more than 6 items");
        setLoading(false);
      } else {
        await fetch("http://localhost:5001/amazon/list", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: sessionStorage.getItem("userId"),
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            sessionStorage.setItem(
              "amazon-list",
              JSON.stringify({
                "amazon-list": json.amazon,
              })
            );
            setLoading(false);
            window.location.reload();
          });
      }
    }
  };
  return (
    <div className="addamazon-wrap">
      <form className="addamazon-form">
        <div className="aa-search-bar">
          <input
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            className="aa-input"
          />
        </div>
        <i
          onClick={(e) => {
            setUrl("");
            handleSubmit(e);
          }}
          className="fas fa-search ai-search"
        />
      </form>
      <img
        src={svg}
        alt=""
        className={loading ? "aa-loading" : "aa-loading-false"}
      />
      <span className="aa-err">{`${urlErr}`}</span>
    </div>
  );
}
