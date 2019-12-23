import React from "react";
import developmentRecipesScreenshot from "src/assets/development-recipes.png";
import docsBadge from "src/assets/docs-badge.svg";

export default function DevelopmentRecipes() {
  return (
    <div className="DevelopmentRecipes">
      <header>
        <h3>Development Recipes</h3>
        <div className="badges">
          <img src={docsBadge} alt="docs: passing" />
        </div>
      </header>

      <section>
        <a href="https://development-recipes.readthedocs.io/en/latest/index.html">
          <img
            className="screenshot float-left"
            src={developmentRecipesScreenshot}
            alt=""
          />
        </a>

        <div className="description">
          <p>
            Development Recipes is a set of documentation I put together and
            hosted on Read the Docs. They are an attempt to record sets of best
            practices I've come across for tackling various types of projects.
          </p>

          <p>
            Like version controlling my dotfiles I found that writing this
            information down in one place, rather than always reading through
            the same discussions and lists of pros and cons, allows me to
            bootstrap new projects quickly but also in a way that sets them up
            for long-term extension and maintenance.
          </p>
          <p>
            The docs themselves are written using reStructuredText and then
            built using Sphinx and the Read the Docs theme.
          </p>
        </div>

        <ul className="links">
          <li>
            <a href="https://development-recipes.readthedocs.io/en/latest/index.html">
              Check it out!
            </a>
          </li>
          <li>
            <a href="https://github.com/jpmunz/development-recipes">Source</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
