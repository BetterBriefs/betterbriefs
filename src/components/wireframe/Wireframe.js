import React from 'react';
import { Card } from "../card/Card";

export const Wireframe = ({ layoutUrl}) => {
    return (
        <Card>
            <h2>Layout</h2>
            <img src={layoutUrl} alt="layout"></img>
        </Card>
    );
};