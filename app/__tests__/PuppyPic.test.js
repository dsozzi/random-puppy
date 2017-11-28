import React from "react";
jest.mock("../utils/api");
import PuppyPic from "../component/PuppyPic";
import { mount } from "enzyme";

test("if PuppyPic is mounted correctly", () => {
    const doneChange = jest.fn();
    const wrapper = mount(<PuppyPic onSelect={doneChange} dogPicture={""} />);
    expect(wrapper.find("PuppyPic")).toHaveLength(1);
});

test("if the placeholder is displayed when starting component", () => {
    const doneChange = jest.fn();
    const wrapper = mount(<PuppyPic onSelect={doneChange} dogPicture={""} />);
    expect(wrapper.find(".empty-placeholder")).toHaveLength(1);
});

test("if PuppyPic prop is received correctly", () => {
    const doneChange = jest.fn();
    const dogPic = "https://dog.ceo/api/img/hound-walker/n02089867_1599.jpg";
    const wrapper = mount(<PuppyPic onSelect={doneChange} dogPicture={dogPic} />);
    expect(wrapper.props().dogPicture).toBe("https://dog.ceo/api/img/hound-walker/n02089867_1599.jpg");
});

test("if the dog picture is displayed when receiving the image", () => {
    const doneChange = jest.fn();
    const dogPic = "https://dog.ceo/api/img/hound-walker/n02089867_1599.jpg";
    const wrapper = mount(<PuppyPic onSelect={doneChange} dogPicture={dogPic} />);
    expect(wrapper.find(".puppy-container")).toHaveLength(1);
});

test('if clicking on the more button, the callback gets called', async () => {
    const doneChange = jest.fn();
    const dogPic = "https://dog.ceo/api/img/hound-walker/n02089867_1599.jpg";
    const wrapper = await mount(<PuppyPic onSelect={doneChange} dogPicture={dogPic} />);
    const moreButton = wrapper.find('.button-more').simulate('click');
    expect(doneChange).toHaveBeenCalled();
})
