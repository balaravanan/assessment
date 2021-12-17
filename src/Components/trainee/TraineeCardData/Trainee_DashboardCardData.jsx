import React, { useState } from "react";
import "./Trainee_DashboardCardData.css";
import Fade from "react-reveal/Fade";
export default function Trainee_DashboardCardData({ data }) {
  console.log("data", data);
  return (
    <>
      {data.length > 0 ? (
        data.map((data) => {
          return (
            <>
              <div style={{ marginTop: "1%" }}></div>
              <Fade bottom>
                <tr className="dashboardcarddata__container">
                  <td className="dashboardcarddata__dataitems">
                    {data.taskName}
                  </td>
                  <td className="dashboardcarddata__dataitems">
                    {data.startDate.substr(0, 10)}
                  </td>
                  <td className="dashboardcarddata__dataitems">
                    {data.endDate.substr(0, 10)}
                  </td>
                  <td className="dashboardcarddata__dataitems">
                    {data.assignedBy.userName}
                  </td>
                  <td className="dashboardcarddata__dataitems">
                    <a href={`${data.reference}`} target="_blank">
                      Link to Reference
                    </a>
                  </td>
                </tr>
              </Fade>
            </>
          );
        })
      ) : (
        <tr>
          <td style={{ textAlign: "center", padding: "10%" }} colspan="6">
            No Data Available
          </td>
        </tr>
      )}
    </>
  );
}
