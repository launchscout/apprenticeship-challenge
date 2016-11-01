const Storage = (() => {
	const save = (items) => {
		localStorage.setItem('shopping_list', JSON.stringify(items));
	};

	const get = () => {
		const list = localStorage.getItem('shopping_list');
		return JSON.parse(list);
	};

	return {
		save,
		get
	};
})();

export default Storage;
