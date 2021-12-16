import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Circle() {
  const percentage = 15;
                                                                                                       
  return (
        <>
        <div>
        <div className="card"
         style={{
            width: "1200px",
            height: "40em",
            marginLeft: "1em",
            marginTop:"1em",
            borderRadius: "15px",
            // borderRight: "1px solid #d7c9c9",
          }}
        >
              <p className="headingpro">Progress</p>
        <div style={{ width: 400, height: 400, paddingLeft:"10em", paddingTop:"8em", display:"flex"}}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
    <div className="card"
     style={{
        width: "300px",
        height: "25em",
        marginLeft: "40em",
        marginTop:"-20em",
        borderRadius: "15px",
        // borderRight: "1px solid #d7c9c9",
      }}
    >
            <b style={{paddingLeft:"7em", paddingTop:"2em"}} >HTML</b> 
            <p style={{paddingLeft:"7em", paddingTop:"1em"}} className="FASED">CSS3</p>
            <p style={{paddingLeft:"6em"}} className="FASED">BOOTSTRAP</p>
            <p style={{paddingLeft:"6em"}} className="FASED">JAVASCRIPT</p>
            <p style={{paddingLeft:"6em"}} className="FASED">ECMA SCRIPT</p>
            <p style={{paddingLeft:"7em"}} className="FASED">REACTJS</p>
            <p style={{paddingLeft:"8em"}} className="FASED">GIT</p>

    </div>
    </div>
    </div>
    </>
  );
}
