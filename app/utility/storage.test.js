import Storage from './storage';

// Create localStorage mock
const localStorageMock = (() => {
	return {
		setItem: jest.fn(),
		getItem: jest.fn().mockReturnValue('{"one": 1}')
	};
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Storage', () => {
	it('should call localStorage.setItem() on save', () => {
		const list = ['a', 'b', 'c'];
		Storage.save(list);

		const calls = localStorageMock.setItem.mock.calls;
		expect(calls.length).toEqual(1);
		expect(calls[0][0]).toEqual('shopping_list');
		expect(calls[0][1]).toEqual(JSON.stringify(list));
	});

	it('should call localStorage.getItem() on get', () => {
		Storage.get();

		const calls = localStorageMock.getItem.mock.calls;
		expect(calls.length).toEqual(1);
		expect(calls[0][0]).toEqual('shopping_list');
	});
});
