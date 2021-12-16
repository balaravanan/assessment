import React, { useEffect, useState } from "react";
import "./UsersCount.css";
import Api from "../../auth/ApiService";
export default function UsersCount(props) {
  const [count, setCount] = useState([]);
  useEffect(() => {
    Api.count().then((res) => {
      console.log(res);
      setCount(res);
    });
  }, []);
  return (
    <>
      {count &&
        count.map((data) => {
          return (
            <div className="userscount_views_card_view">
              <div className="userscount_views_total_title">
                <div className="userscount_views_total_title_text">
                  {data.Name}
                </div>
                <div className="userscount_views_total_title_value">
                  {data.count}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
