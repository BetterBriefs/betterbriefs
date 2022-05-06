import React from "react";
import { Card } from "../../components/atoms/card/Card";

export const About = () => {
  document.title = "About | BetterBriefs";
  return (
    <section className="main-container">
      <Card>
        <h1>About</h1>
        <h2>The Idea</h2>
        <p>
          BetterBriefs a website for programmers who want to improve their
          programming skills without thinking about a project idea and concept.
          The main goal for the user is to build a website with the given
          criteria and needs of the persona. The user will get a random
          generated brief including the idea, persona, colors, fonts and a
          wireframe. The user should be able to start programming after reading
          the generated proposal without thinking about a concept.
        </p>
        <p>
          The main part is to get a realistic random generated brief, which is
          easy to understand. Features like "add to favorites", "print pdf" etc.
          are also available.
        </p>

        <h2>The Problem</h2>
        <p>
          The existing online brief/idea generators like goodbiref.io
          concentrate soly on short briefs which include a project idea but not
          a complete concept which is needed to start building a website.
        </p>
        <p>
          Programmers who want to practise and improve their skills in
          programming have to think about a concept (layout, colors, fonts, ...)
          on their own before they can start with the implementation. The
          existing Online generator tools are focussed too much on ideation
          phase instead of the coding one.
        </p>
      </Card>
    </section>
  );
};
