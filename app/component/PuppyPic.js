import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * Main block that will display a dog picture and a button to get a new random image. In case no image is provided
 * a placeholder will be rendered.
 * @param {object} props - Component's props passed from the <App/> component
 */
const PuppyPic = props => {
    return (
        <div>
            {!props.dogPicture ? (
                <h1 className="empty-placeholder">Select a breed</h1>
            ) : (
                <div className="puppy-container">
                    <img src={props.dogPicture} alt="A puppy picture" />
                    <button className="button button-more" onClick={e => props.onSelect()}>
                        Get some more
                    </button>
                </div>
            )}
        </div>
    );
};

PuppyPic.propTypes = {
    dogPicture: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default PuppyPic;