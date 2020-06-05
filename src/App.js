import React, { Component } from "react";
import HomePage from "./components/HomePage";
import { Container } from "semantic-ui-react";

export class App extends Component {
    render() {
        return (
            <Container>
                <HomePage />
            </Container>
        );
    }
}

export default App;
