import "./styles.css";
import { useState } from "react";

const cars = ["c1.jpg", "c2.jpg", "c3.jpg"];
const about = {
  Sedan: {
    "c1.jpg":
      "The 2021 Mercedes-AMG E63 S's supreme craftsmanship extends to its engine, a 4.0-liter twin-turbo V8 with an impressive 603 hp output.",
    "c2.jpg":
      "The M5 sports a twin-turbo 4.4-liter V8 engine that displaces 600 hp on the base trim with an increase to 617 hp on the Competition trim and 627 hp In the Competition Sport..",
    "c3.jpg":
      "The Giulia Quadrifoglio packs a punch with its 2.9-liter twin-turbo V6 engine that displaces 505 hp.",
    "c4.jpg":
      "he 2022 Porsche Panamera Turbo makes the list of fastest sedans. Porsche equipped the Panamera with a vigorous twin-turbocharged 4.0-liter V8 that makes 620 hp"
  },

  SUV: {
    "c1.jpg":
      "Described as “the Supercar of SUVs” by Aston Martin, the DBX707 moves high-riding models even closer to the 200mph barrier",
    "c2.jpg":
      "The Porsche Cayenne was the original uber-SUV, and if it wasn’t for the DBX707 arriving on the scene, it would still be the fastest today. It actually level-pegs the British model for 0-62mph pace in an astonishing 3.3 seconds, but can’t quite match its top speed - not that it should matter in the real world.",
    "c3.jpg":
      "Even in this list of ostentatious SUVs, the Urus manages to stand out in true Lamborghini fashion.",
    "c4.jpg":
      "Competition badged models have the twin-turbocharged 4.4-litre V8 from the M8 Competition producing 616bhp. The 0-62mph times stand at 3.8 seconds and if you opt for the M Driver’s Package the 155mph speed limiter is lifted and you’ll roar onto 180mph."
  },

  HatchBack: {
    "c1.jpg":
      "The 2.5-litre five-cylinder engine produces a nice round 400PS, or 395bhp, which is up 33bhp on before",
    "c2.jpg":
      "The final run takes the AMG A45 S from zero to its top speed, blasting past 62 mph in about four seconds, which jives with Mercedes' claimed 0-60 time. The car rockets past 124 mph in about 14 seconds.",
    "c3.jpg":
      "Torque now matches the massively brawny Ford Focus ST at 310lb ft, maintained from 2,100rpm right up to 5,350rpm, where 316bhp takes over. VW claims 0-62mph in 4.7 seconds and a top whack limited to 155mph. ",
    "c4.jpg":
      "the 2021 AMG A35 4Matic did the 0-60-mph hustle in a brisk 4.4 seconds, which shaved 0.2 tick off the official time quoted by the automaker."
  }
};

export default function App() {
  const [genre, setGenre] = useState("Sedan");
  return (
    <div
      className="img"
      style={{
        margin: "0px",
        padding: "0px",
        backgroundImage: `url(/src/${genre}/c1.jpg)`,
        height: "120vh",
        width: "100%",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="blur">
        <div>
          <h1 className="header ">The Best Car recommendations</h1>

          <hr />

          <div className="btns">
            <button
              className="btn"
              style={{
                color: genre === "Sedan" ? "white" : "black",
                fontSize: genre === "Sedan" ? "3vw" : "2vw"
              }}
              onClick={() => setGenre("Sedan")}
            >
              Sedan
            </button>
            <button
              className="btn"
              style={{
                color: genre === "SUV" ? "white" : "black",
                fontSize: genre === "SUV" ? "3vw" : "2vw"
              }}
              onClick={() => setGenre("SUV")}
            >
              SUV
            </button>
            <button
              className="btn"
              style={{
                color: genre === "HatchBack" ? "white" : "black",
                fontSize: genre === "HatchBack" ? "3vw" : "2vw"
              }}
              onClick={() => setGenre("HatchBack")}
            >
              HatchBack
            </button>
          </div>
          <hr />
          <div className="car-grid">
            {cars.map((item) => {
              return (
                <div key={item} className="car-tile">
                  <img
                    className="car-img"
                    key={item}
                    src={`./src/${genre}/${item}`}
                    alt=""
                  />
                  <div className="car-desc-layer">
                    <p className="car-desc">{about[`${genre}`][`${item}`]}</p>
                    {/* <p className="car-desc">Amar Narute</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
