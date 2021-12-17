import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import SideContent from "../SideContent";
import Upload from "./Upload";
import Header from "../header/Header";

function Content() {
  return (
    <div>
      <Header />
      <div class="row align-items-start">
        <div class="col-md-3">
          <SideContent />
        </div>
        <div class="col-md-9" style={{ marginTop: "10em" }}>
          <Upload />
        </div>
      </div>
    </div>
  );
}

export default Content;
