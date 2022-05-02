import React from 'react';
import { Card } from "../card/Card";
import './Wireframe.css';

export const Wireframe = ({ layoutUrl}) => {

    return (
        <Card>
            <h2>Layout</h2>
            <img src={layoutUrl} class="wireframe__img" alt="layout"></img>
        </Card>
    );
};