import React from "react";
jest.mock('../utils/api');
import BreedList from "../component/BreedList";
import { mount } from 'enzyme';

test('if BreedList is mounted correctly',  () => {
    const doneChange = jest.fn();
    const wrapper =  mount(<BreedList onSelect={doneChange} selectedBreed={''} />);
    expect(wrapper.find('BreedList')).toHaveLength(1);
})

test('if selectedBreed prop is received correctly',  () => {
    const doneChange = jest.fn();
    const wrapper =  mount(<BreedList onSelect={doneChange} selectedBreed={'african'} />);
    expect(wrapper.props().selectedBreed).toBe('african')
})

test('if breeds are fetched correctly', async () => {
    const doneChange = jest.fn();
    const breeds = ['boxer', 'african', 'collie'];
    const wrapper = await mount(<BreedList onSelect={doneChange} selectedBreed={''} />);
    expect(wrapper.state().breeds).toEqual(breeds);
    ;
})

test('if breeds are rendered correctly', async () => {
    const doneChange = jest.fn();
    const wrapper = await mount(<BreedList onSelect={doneChange} selectedBreed={''} />);
    wrapper.update();
    expect(wrapper.find('.breeds-container').children().find('a')).toHaveLength(3);
})

test('if clicking on the first breed name updates the selected breed', async () => {
    const doneChange = jest.fn();
    const wrapper = await mount(<BreedList onSelect={doneChange} selectedBreed={''} />);
    wrapper.update();
    const firstAnchor = wrapper.find('.breeds-container').childAt(0).find('a').simulate('click');
    expect(doneChange).toBeCalledWith('boxer', expect.anything());
})
