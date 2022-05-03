import React from "react";
import { Card } from "../card/Card";

export const Privacy = () => {
    document.title = "Data Privacy | BetterBriefs";
  return (
    <section className="main-container">
        <Card>
            <h1>Privacy Policy for BetterBriefs</h1>
            <p>At BetterBriefs, accessible from https://BetterBriefs.dev/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BetterBriefs and how we use it.</p>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at <a href="mailto://email@araz.dev">email@araz.dev</a></p>
            
            <h2>General Data Protection Regulation (GDPR)</h2>
            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.</p>
            
            <h2>Log Files</h2>
            <p>BetterBriefs follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

            <h2>Online Privacy Policy Only</h2>
            <p>This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in BetterBriefs. This policy is not applicable to any information collected offline or via channels other than this website.</p>

            <h2>Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        </Card>
    </section>
  );
};
