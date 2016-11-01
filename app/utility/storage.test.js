import Storage from './storage';

// create localStorage mock
const localStorageMock = (() => {
	return {
		setItem: jest.fn(),
		getItem: jest.fn().mockReturnValue('{"one": 1}')
	};
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Storage', () => {
	it('should call localStorage.setItem() on save', () => {
		const info = {
			list: ['a', 'b', 'c'],
			title: 'Shopping List'
		};
		Storage.save(info);

		const calls = localStorageMock.setItem.mock.calls;
		expect(calls.length).toEqual(2);
		expect(calls[0][0]).toEqual('shopping_list');
		expect(calls[0][1]).toEqual(JSON.stringify(info.list));

		expect(calls[1][0]).toEqual('shopping_list_name');
		expect(calls[1][1]).toEqual(JSON.stringify(info.title));
	});

	it('should call localStorage.getItem() on get', () => {
		Storage.get();

		const calls = localStorageMock.getItem.mock.calls;
		expect(calls.length).toEqual(2);
		expect(calls[0][0]).toEqual('shopping_list');
		expect(calls[1][0]).toEqual('shopping_list_name');
	});
});
