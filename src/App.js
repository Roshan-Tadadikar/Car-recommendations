import "./styles.css";
import { useState } from "react";

const cars = ["c1.jpg", "c2.jpg", "c3.jpg"];
const description = {
  Sedan: {
    "c1.jpg":
      "9/10 Mercedes-Benz India has brought the E63 S sports saloon in India. Positioned at the peak of the E-Class hierarchy in India, the E63 has been brought to India via the CBU route and is retailed alongside the standard E-Class and the Mercedes-AMG E53. ",
    "c2.jpg":
      "8.9/10  BMW M5 Engine and Transmission: Propulsion duties are carried out by a 4.4-litre twin-turbocharged V8 petrol engine (625PS/750Nm), paired with an 8-speed automatic transmission. It also gets BMW’s xDrive all-wheel drivetrain.",
    "c3.jpg":
      "8.5/10  The elusive 2022 Alfa Romeo Giulia Quadrifoglio is currently the fastest Alfa Romeo model on the market, with a class-leading top speed of 191 miles per hour and a 0-60 time of 3.8 seconds",
    "c4.jpg":
      "9/10  The price of Porsche Panamera starts at Rs. 1.58 Cr and goes upto Rs. 2.71 Cr. Porsche Panamera is offered in 5 variants - the base model of Panamera is STD and the top variant Porsche Panamera S E-Hybrid which comes at a price tag of Rs. 2.71 Cr."
  },

  SUV: {
    "c1.jpg":
      "9.5/10  Described as “the Supercar of SUVs” by Aston Martin, the DBX707 moves high-riding models even closer to the 200mph barrier",
    "c2.jpg":
      "9.2/10  The Porsche Cayenne was the original uber-SUV, and if it wasn’t for the DBX707 arriving on the scene, it would still be the fastest today. It actually level-pegs the British model for 0-62mph pace in an astonishing 3.3 seconds, but can’t quite match its top speed - not that it should matter in the real world.",
    "c3.jpg":
      "9/10  Even in this list of ostentatious SUVs, the Urus manages to stand out in true Lamborghini fashion.",
    "c4.jpg":
      "8.9/10  Competition badged models have the twin-turbocharged 4.4-litre V8 from the M8 Competition producing 616bhp. The 0-62mph times stand at 3.8 seconds and if you opt for the M Driver’s Package the 155mph speed limiter is lifted and you’ll roar onto 180mph."
  },

  HatchBack: {
    "c1.jpg":
      "9.2/10  The 2.5-litre five-cylinder engine produces a nice round 400PS, or 395bhp, which is up 33bhp on before",
    "c2.jpg":
      "9/10  The final run takes the AMG A45 S from zero to its top speed, blasting past 62 mph in about four seconds, which jives with Mercedes' claimed 0-60 time. The car rockets past 124 mph in about 14 seconds.",
    "c3.jpg":
      "9.1/10  Torque now matches the massively brawny Ford Focus ST at 310lb ft, maintained from 2,100rpm right up to 5,350rpm, where 316bhp takes over. VW claims 0-62mph in 4.7 seconds and a top whack limited to 155mph. ",
    "c4.jpg":
      "8.7/10  the 2021 AMG A35 4Matic did the 0-60-mph hustle in a brisk 4.4 seconds, which shaved 0.2 tick off the official time quoted by the automaker."
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
                    <p className="car-desc">
                      {description[`${genre}`][`${item}`]}
                    </p>
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
