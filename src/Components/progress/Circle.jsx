import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import RadialSeparators from "./RadialSeparators";

export default function Circle() {

  const[html, setHtml]= useState(true);
  const[css, setcss]= useState(false);
  const[boot, setboot]= useState(false);
  const[java, setjava]= useState(false);
  const[ecma, setecma]= useState(false);
  const[react, setreact]= useState(false);
  const[git, setgit]= useState(false);


  
  const htmlclick = () => {
    setHtml(true);
    setcss(false);
    setboot(false);
    setjava(false);
    setecma(false);
    setreact(false);
    setgit(false);
  }

  const cssclick = () => {
    setHtml(false);
    setcss(true);
    setboot(false);
    setjava(false);
    setecma(false);
    setreact(false);
    setgit(false);
  }

  const bootclick = () => {
    setHtml(false);
    setcss(false);
    setboot(true);
    setjava(false);
    setecma(false);
    setreact(false);
    setgit(false);
  }

  const javaclick = () => {
    setHtml(false);
    setcss(false);
    setboot(false);
    setjava(true);
    setecma(false);
    setreact(false);
    setgit(false);
  }

  const ecmaclick = () => {
    setHtml(false);
    setcss(false);
    setboot(false);
    setjava(false);
    setecma(true);
    setreact(false);
    setgit(false);
  }

  const reactclick = () => {
    setHtml(false);
    setcss(false);
    setboot(false);
    setjava(false);
    setecma(false);
    setreact(true);
    setgit(false);
  }

  const gitclick = () => {
    setHtml(false);
    setcss(false);
    setboot(false);
    setjava(false);
    setecma(false);
    setreact(false);
    setgit(true);
  }

  const percentage = 85;
  const percentage1 = 75;
  const percentage2 = 65;
  const percentage3 = 55;
  const percentage4 = 45;
  const percentage5 = 35;
  const percentage6 = 20;
  
                        
  return (
        <>
        <div>
        <div className="card"
         style={{
            width: "100%",
            height: "40em",
            marginLeft: "1em",
            marginTop:"1em",
            borderRadius: "15px",
            // borderRight: "1px solid #d7c9c9",
          }}
        >
              <p className="headingpro">Progress</p>

            <div style={{display:"flex",justifyContent:"center"}}>

            <div className="card"
             style={{
            width: "15%",
            height: "100%",
            marginTop:"1em",
            marginRight:"20em"
            // borderRight: "1px solid #d7c9c9",
          }}>

            <b style={{cursor:"pointer", opacity: html ? 1 : 0.5}}  onClick={htmlclick}>HTML</b><br/>
            <b style={{cursor:"pointer", opacity: css ? 1 : 0.5}}   onClick={cssclick}>CSS3</b><br/>
            <b style={{cursor:"pointer", opacity: boot ? 1 : 0.5}}  onClick={bootclick}>BOOTSTRAP</b><br/>
            <b style={{cursor:"pointer", opacity: java ? 1 : 0.5}}  onClick={javaclick}>JAVA SCRIPT</b><br/>
            <b style={{cursor:"pointer", opacity: ecma ? 1 : 0.5}}  onClick={ecmaclick}>ECMA SCRIPT</b><br/>
            <b style={{cursor:"pointer", opacity: react ? 1 : 0.5}} onClick={reactclick}>REACT JS</b><br/>
            <b style={{cursor:"pointer", opacity: git ? 1 : 0.5}}   onClick={gitclick}>GIT</b><br/>
            </div>
        

          { html && (
            <div style={{ width: 250, height: 200,   marginRight:"20em", marginTop:"5em" }}>
          <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "turquoise",
          trailColor: "gold"
        })}
      />
        </div>
        )}


          { css && (
            <div style={{ width: 250, height: 200,  marginRight:"20em", marginTop:"5em"}}>
        <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
        </div>
        )}

        { boot && (
            <div style={{ width: 250, height: 200,  marginRight:"20em", marginTop:"5em"}}>
       <CircularProgressbar
        value={percentage2}
        text={`${percentage2}%`}
        styles={buildStyles({
          rotation: 0.5 + (1 - percentage / 100) / 2
        })}
      />
        </div>
        )}

        { java && (
            <div style={{ width: 250, height: 200,  marginRight:"20em", marginTop:"5em"}}>
        <ChangingProgressProvider values={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80,85]}>
        {percentage => (
          <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
        )}
      </ChangingProgressProvider>
        </div>
        )}

        { ecma && (
            <div style={{ width: 250, height: 200,  marginRight:"20em", marginTop:"5em"}}>
        <CircularProgressbarWithChildren
        value={80}
        text={`${percentage4}%`}
        styles={buildStyles({
          pathColor: "#f00",
          trailColor: "#eee",
          strokeLinecap: "butt"
        })}
      >
        {/* Foreground path */}
        <CircularProgressbar
          value={70}
          styles={buildStyles({
            trailColor: "transparent",
            strokeLinecap: "butt"
          })}
        />
      </CircularProgressbarWithChildren>
        </div>
        )}

        { react && (
            <div style={{ width: 250, height: 200,  marginRight:"20em", marginTop:"5em"}}>
       <CircularProgressbarWithChildren value={66}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 40, marginTop: -5 }}
          src="https://i.imgur.com/b9NyUGm.png"
          alt="doge"
        />
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>66%</strong> mate
        </div>
      </CircularProgressbarWithChildren>
        </div>
        )}

        { git && (
            <div style={{ width: 250, height: 200,  marginRight:"20em", marginTop:"5em"}}>
        <CircularProgressbarWithChildren
        value={80}
        text={`${80}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt"
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: "#fff",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`
          }}
        />
      </CircularProgressbarWithChildren>
        </div>
        )}


        </div>
        </div>
    </div>
    </>
  );
}
