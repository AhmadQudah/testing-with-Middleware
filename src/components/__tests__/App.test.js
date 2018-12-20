import React from "react";
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach (()=>{
    wrapped = shallow(<App />);
});

it('shows a comment box', ()=>{

    expect(wrapped.find(CommentBox).length).toEqual(1);

    //inside of expect is the value that we are trying
    //to ma assertion about or expectation about
});

it('shows a comment list', ()=>{

    expect(wrapped.find(CommentList).length).toEqual(1);

    //inside of expect is the value that we are trying
    //to ma assertion about or expectation about
});