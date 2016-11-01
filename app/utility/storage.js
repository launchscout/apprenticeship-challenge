const Storage = (() => {
	const SHOPPING_LIST = 'shopping_list';
	const SHOPPING_LIST_NAME = 'shopping_list_name';

	const save = ({ list, title }) => {
		localStorage.setItem(SHOPPING_LIST, JSON.stringify(list));
		localStorage.setItem(SHOPPING_LIST_NAME, JSON.stringify(title));
	};

	const get = () => {
		const list = JSON.parse(localStorage.getItem(SHOPPING_LIST));
		const title = JSON.parse(localStorage.getItem(SHOPPING_LIST_NAME));

		return {
			list,
			title
		};
	};

	return {
		save,
		get
	};
})();

export default Storage;
