import React from "react";
import BreedList from "./BreedList";
import PuppyPic from "./PuppyPic";
import * as api from "../utils/api";
import dog from "../images/dog.png";

/**
 * The main app component. Inside will be rendered <BreedList/> and <PuppyPic/> components.
 */
export default class App extends React.Component {
    state = {
        currentBreed: "",
        puppyPic: ""
    };

    handleSelect = async breed => {
        let b = breed || this.state.currentBreed;
        this.setState(() => ({
            currentBreed: b
        }));

        const resp = await api.getDogByBreed(b);
        this.setState(() => ({
            puppyPic: resp
        }));
    };

    render() {
        return (
            <div className="container">
                <header>
                    <img className="header-logo" src={dog} alt="" />
                    <h1>Random Puppy</h1>
                </header>
                <main id="mainApp">
                    <div className="sidebar">
                        <BreedList onSelect={this.handleSelect} selectedBreed={this.state.currentBreed} />
                    </div>
                    <div className="content-view">
                        <PuppyPic onSelect={this.handleSelect} dogPicture={this.state.puppyPic} />
                    </div>
                </main>
            </div>
        );
    }
}
