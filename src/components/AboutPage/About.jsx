import React from 'react'
import Header from '../Header'
import "./about.css"

const About = () => {
    return (
        <div>
            <Header />
            <div className="tracking-in-expand">
                <div className="about-container">
                    <div className="about-content">
                        <h1>
                            Hey, Im Tom.
                        </h1>
                        <p>
                            Im a 17 y/o self tought developer from Melbourne, Australia.
                        </p>
                        <p>
                            I started coding in 2018, and ever since ive been working within various computing spaces.
                        </p>
                        <p>
                            Beginning with Python, Ive since become experienced in development with Javascript, and have worked with various frameworks and libraries, including React, NextJS.
                        </p>
                        <p>
                            Beyond web development, Ive also worked with various other languages, including C#, C++, GO, and Rust.
                        </p>
                        <p>
                            Lately Ive been moving away from web development more towards C#, developing my Units 3/4 Software Development SAT for VCE using C# and AvaloniaUI. I also have been using C# to work on creating plugins for Rust (the game) using the Oxide modding framework.
                        </p>
                        <p>
                            I also have experience with various other technologies, including Docker, and various cloud providers, including AWS.
                        </p>
                        <p>
                            Through my learning in computing, Ive also become experienced in Linux, and have been using it as my daily driver in combination with windows. I also have experience with various other operating systems, including MacOS, and many linux distros.
                        </p>
                        <p>
                            From 2022-2023 ive been undertaking a VET course in Netoworking and Cyber Security, and have been learning various skills including networking, and security. All working towards a Certificate III in Networking and Cybersecurity.
                        </p>
                        <p>
                            With this experience in security, Ive come to a deep understanding on a low level of how computers work, and have been able to use this knowledge to my advantage in my development and in projects such as developing stealth virtual machines to bypass even the lowest level kernal based anti-cheats / anti-tamper such as EasyAntiCheat, BattleEye and Vangaurd.
                        </p>
                        <p>
                            This has also lead to developing a deep understanding of the WindowsAPI, and understanding Dynamic Link Libraries, and how they work, and how to use them to my advantage through Process injection or Process Hyjacking.
                        </p>
                        <p>
                            I am looking at working within the Software Development or Cybersecrity space within the next few years post highschool.
                        </p>
                        <p>
                            All of my projects can be found on my <b><a href='https://github.com/tomrowland-dev'><u>Github</u></a></b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About