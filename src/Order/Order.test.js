/* eslint-disable import/first */
jest.mock('../utils/getDate');
import React from 'react'
import {getDate} from "../utils/getDate";
import {shallow, configure} from 'enzyme';
import Order from "./Order";
import {fakeOrders} from '../data/fakeOrders';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Order.js', () => {

    getDate.mockReturnValue(`22 декабря 2020 года`);

    beforeEach(() => {
        jest.resetModules();
    });

    afterAll(() => {
        jest.resetModules();
    });

    it('Right', () => {
        const wrapper = shallow(<Order order={fakeOrders[1]}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('order is null', () => {

        const order = {
            shop: null,
            date: null
        }
        const wrapper = shallow(<Order order={order}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('empty order', () => {
        const emptyWrapper = shallow(<Order/>);
        expect(emptyWrapper).toMatchSnapshot();
    });
})
