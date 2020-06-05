import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

export class PlayerCard extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Image src={require("./matthew.png")} wrapped />
                    <Card.Content>
                        <Card.Header>{this.props.player}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Button fluid>Copy Crosshair</Button>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default PlayerCard;
