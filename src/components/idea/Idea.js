import React from "react";
import { Card } from "../card/Card";
import { Tags } from "../tags/Tags";

export default function Idea ({ idea }) {
  return (
    <Card>
      <h2>Idea</h2>
      <Tags difficulty={idea.difficulty} type={idea.type} />
      <h3>Title</h3>
      <p>{idea.title}</p>
      <h3>Description</h3>
      <p>{idea.description}</p>
    </Card>
  );
};
