import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../utils/api";

const styles = {
    content: {
        color: "white",
        backgroundColor: "#84b8e6"
    }
};

/**
 * Component that will list all dog's breeds.
 */
export default class BreedList extends Component {
    state = {
        breeds: []
    };

    static propTypes = {
        selectedBreed: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired
    };

    async componentDidMount() {
        const breeds = await api.getBreeds();
        this.setState(() => ({ breeds }));
    }

    render() {
        return (
            <ul className="breeds-container">
                {this.state.breeds.map(breed => (
                    <li key={breed}>
                        <a
                            href="#"
                            onClick={this.props.onSelect.bind(null, breed)}
                            style={breed === this.props.selectedBreed ? styles.content : null}
                        >
                            {breed}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}
