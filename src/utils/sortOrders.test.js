import React from 'react'
import {sortByDate, sortByItemCount, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	test.each([
			[null, null],
			[{items: ['item1', 'item2']}, {items: ['1', '2']}],
			['lll', 'hello'],
		    [{things: ['item1', 'item2']}, {things: ['1']}],
		])('zero', (order1, order2) => {
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('order1 < order2', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(-1);
	});

	it('order1 > order2', () => {
		const order1 = {
			items: ['item1', 'item2', 'items3'],
		};

		const order2 = {
			items: ['1', '2'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(1);
	});
});

describe('sortByDate function', () => {
	test.each([
		[null, null],
		[{date: 1231}, {date: 1231}],
		['lll', 'hello'],
		[{things: ['item1', 'item2']}, {things: ['1']}],
	])('zero', (order1, order2) => {
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('date1 < date2', () => {
		const order1 = {
			date: 123,
		};

		const order2 = {
			date: 124,
		};

		const result = sortByDate(order1, order2);

		expect(result).toEqual(1);
	});

	it('date1 > date2', () => {
		const order1 = {
			date: 124,
		};

		const order2 = {
			date: 123,
		};

		const result = sortByDate(order1, order2);

		expect(result).toEqual(-1);
	});
});

describe('sortOrders function', () => {
	it('orders null', () => {
		const orders = null;
		sortOrders(orders, sortByDate);
		expect(orders).toEqual(null);
	});

	it('sortFunction null', () => {
		const orders = [
			{
				items: ['1'],
			},
			{
				items:['2'],
			},
		];
		sortOrders(orders, null);
		expect(orders).toEqual([
			{
				items: ['1'],
			},
			{
				items:['2'],
			},
		]);
	});

	it('works correctly', () => {
		const orders1 = [
			{
				date: 11,
			},
			{
				date: 7,
			},
			{
				date: 12
			}
		];
		const orders2 = [
			{
				date: 12,
			},
			{
				date: 11,
			},
			{
				date: 7,
			}
		];
		sortOrders(orders1, sortByDate);
		expect(orders1).toEqual(orders2);
	});
});
