import React, { Component } from "react";
import { Accordion, Segment } from "semantic-ui-react";
import GithubCorner from "react-github-corner";
import players from "./players.json";
import "./style.css";

import { Acc } from "./Acc";

export class HomePage extends Component {
    constructor(props) {
        super(props);
        let temp = [];
        for (let i = 0; i < 5; i++) {
            temp.push(false);
        }
        this.state = {
            active: temp,
        };
    }

    render() {
        let temp = [];
        for (let team in players) {
            temp.push(<Acc team={team} players={players[team]} />);
        }

        return (
            <div>
                <h1>
                    Pro Players <br /> Crosshairs
                </h1>
                <Accordion fluid styled>
                    {temp}
                </Accordion>
                <GithubCorner href="https://google.com" />
            </div>
        );
    }
}

export default HomePage;
