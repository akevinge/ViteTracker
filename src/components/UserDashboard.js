import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import LoadingPage from "./LoadingPage";
import AddAmazon from "./AddAmazon";
import AmazonItem from "./AmazonItem";

export const UserDashboard = () => {
  const [amazonList, setAmazonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = () => {
    const string = sessionStorage.getItem("amazon-list");
    const json = JSON.parse(string);
    setAmazonList(json["amazon-list"]);
    setLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  if (!loading && amazonList !== undefined) {
    return (
      <>
        <div className="userdash-wrap">
          <AddAmazon />
          <ul className="userdash-list">
            {amazonList.map((n) => (
              <AmazonItem n={n} />
            ))}
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <LoadingPage />
      </>
    );
  }
};
