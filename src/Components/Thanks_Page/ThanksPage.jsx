import React from "react";
import {
  CCard,
  CCardBody,
  CCardText,
  CCardImage,
  CButton,
} from "@coreui/react";
import thanks_pic from "../../assets/interview(1).png";

import thank_pic from "../../images/log-out.png";

function ThanksPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div>
        <CCard
          style={{
            width: "100%",
            padding: "2%",
            height: "max-content",
          }}
        >
          <CCardBody>
            <CCardText>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "3px",
                }}
              >
                THANK YOU FOR PARTICIPATING...
              </p>
            </CCardText>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CCardImage
                orientation="top"
                src={thanks_pic}
                style={{
                  width: "40%",
                }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <CButton
                style={{
                  width: "25%",
                  backgroundColor: "#eb6565",
                  color: "#100000",
                  fontWeight: "600",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "3px",
                  textAlign: "none",
                  marginTop: "1%",
                }}
              >
                LOGOUT
                <CCardImage
                  orientation="top"
                  src={thank_pic}
                  style={{
                    width: "19%",
                    marginLeft: "2%",
                  }}
                />
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
}

export default ThanksPage;
