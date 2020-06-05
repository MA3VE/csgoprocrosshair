import React, { Component } from "react";
import { Accordion, Icon, Grid, Button } from "semantic-ui-react";
import PlayerCard from "./PlayerCard";

export class Acc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    }

    render() {
        return (
            <div>
                <Accordion.Title
                    // active={this.statet}
                    // index={0}
                    style={{
                        textAlign: "left",
                        padding: 0,
                        marginBottom: "5px",
                    }}
                >
                    {/* <Icon name="dropdown" /> */}
                    <Button
                        fluid
                        onClick={() => {
                            this.setState({ active: !this.state.active });
                        }}
                    >
                        {this.props.team}
                    </Button>
                </Accordion.Title>
                <Accordion.Content active={this.state.active}>
                    <Grid>
                        <Grid.Row stackable columns={5}>
                            <Grid.Column>
                                <PlayerCard player={this.props.players[0]} />
                            </Grid.Column>
                            <Grid.Column>
                                <PlayerCard player={this.props.players[1]} />
                            </Grid.Column>
                            <Grid.Column>
                                <PlayerCard player={this.props.players[2]} />
                            </Grid.Column>
                            <Grid.Column>
                                <PlayerCard player={this.props.players[3]} />
                            </Grid.Column>
                            <Grid.Column>
                                <PlayerCard player={this.props.players[4]} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    {/* {this.props.content} */}
                    {/* {console.log(this.props.getActiveIndex())} */}
                </Accordion.Content>
                {/* {console.log(this.props.team)} */}
            </div>
        );
    }
}

export default Acc;
