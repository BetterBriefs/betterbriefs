import React from "react";
import { Card } from "../card/Card";
import "./Imprint.css";
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import arazAvatarUrl from "../../media/Araz.png";
import kerstinAvatarUrl from "../../media/Kerstin.png";
import tanjaAvatarUrl from "../../media/Tanja.png";
export const Imprint = () => {
    document.title = "Imprint | BetterBriefs";
  return (
    <section className="imprint-container">
        <Card>
            <h1>Imprint</h1>
            <p>BetterBriefs is made as a <b>MultiMediaProject2b</b> in our 4th semester at the <a href="https://fh-salzburg.ac.at/">Salzburg University of Applied Sciences</a>.</p>
            <p>The Technologies used in this project are mainly <b>ReactJs</b> and for icons and components, we used some help from <a href="https://mui.com/material-ui">Material UI</a></p>
            <h2 className="imprint-container__TeamHeader">Team</h2>
            <div className="imprint-container__Team">
                <div className="imprint-container__Team__member">
                    <img className="imprint-container__Team__member__img" src={arazAvatarUrl+""} alt="Araz graphical avatar"></img>
                    <h3>Araz Alhamdani</h3>
                    <div className="imprint-container__Team__member__links">
                        <a href="mailto:email@araz.dev"><AlternateEmailIcon /></a>
                        <a href="https://www.linkedin.com/in/araz0"><LinkedInIcon /></a>
                        <a href="https://www.araz.dev"><LanguageIcon /></a>
                    </div>
                </div>

                <div className="imprint-container__Team__member">
                    <img className="imprint-container__Team__member__img" src={kerstinAvatarUrl+""} alt="Kerstin graphical avatar"></img>
                    <h3>Kerstin Reichinger</h3>
                    <div className="imprint-container__Team__member__links">
                        <a href="mailto:kerstin.reichinger@gmx.at"><AlternateEmailIcon /></a>
                        <a href="https://www.linkedin.com/in/kerstin-reichinger-b04130203"><LinkedInIcon /></a>
                        <a href="https://www.kerstin.dev"><LanguageIcon /></a>
                    </div>
                </div>

                <div className="imprint-container__Team__member">
                    <img className="imprint-container__Team__member__img" src={tanjaAvatarUrl+""} alt="Tanja graphical avatar"></img>
                    <h3>Tanja Santner</h3>
                    <div className="imprint-container__Team__member__links">
                        <a href="mailto:santner_tanja@gmx.at"><AlternateEmailIcon /></a>
                        <a href="https://www.linkedin.com/in/tanja-santner-77a414226"><LinkedInIcon /></a>
                        <a href="https://www.santnerin.com"><LanguageIcon /></a>
                    </div>
                </div>
            </div>
            <span className="imprint-container__copyrights">Copyright © 2022 & Beyond. All rights reserved.</span>
        </Card>
    </section>
  );
};
