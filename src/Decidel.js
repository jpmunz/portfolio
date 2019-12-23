import React from "react";
import decidelScreenshot from "src/assets/decidel.png";
import redisBadge from "src/assets/redis-badge.svg";
import flaskBadge from "src/assets/flask-badge.svg";
import reduxBadge from "src/assets/redux-badge.svg";
import reactBadge from "src/assets/react-badge.svg";

export default function Decidel() {
  return (
    <div className="Decidel">
      <header>
        <h3>Decidel</h3>
        <div className="badges">
          <img src={redisBadge} alt="DB: redis" />
          <img src={flaskBadge} alt="API: flask" />
          <img src={reduxBadge} alt="data: redux" />
          <img src={reactBadge} alt="UI: react" />
        </div>
      </header>

      <section>
        <a href="https://decidel.ca">
          <img
            className="screenshot float-left"
            src={decidelScreenshot}
            alt=""
          />
        </a>

        <div className="description">
          <p>
            Decidel was inspired by a lifehhacker article I read describing the
            <a href="https://lifehacker.com/use-the-5-3-1-method-to-pick-dinner-plans-with-your-par-1790135331">
              {" "}
              5-3-1 method.{" "}
            </a>
            I thought it was a great way to make a decision among a group of
            friends and I wanted to create a web app that encapsulated the idea.
          </p>
          <p>
            I started by modeling a "Decidel" as a simple JSON structure that
            would store the set of choices remaining along with a history of
            actions. I created a Redis-backed Flask API with a set basic of CRUD
            methods for manipulating the Decidel which I then consumed on the
            front-end into a Redux powered store. The UI was then built on top
            of the store using React.
          </p>
          <p>
            I based the UI flow on <a href="https://doodle.com/">Doodle</a>. In
            particular I liked its simplicity of being able to send people a
            link and have them immediately participate without requiring a sign
            up/login sequence. This allowed Decidel to be used in a number of
            ways, even by people sitting around the same computer.
          </p>
          <ul className="links">
            <li>
              <a href="https://decidel.ca">Check it out!</a>
            </li>
            <li>
              <a href="https://api.decidel.ca/v1/docs">API docs</a>
            </li>
            <li>
              <a href="https://github.com/jpmunz/decidel-web">
                Frontend source code
              </a>
            </li>
            <li>
              <a href="https://github.com/jpmunz/decidel-flask">
                Backend source code
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
