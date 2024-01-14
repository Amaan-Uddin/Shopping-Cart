import { useState } from 'react';
import Header from './components/Header/Header';
import AddItem from './components/formInputs/AddItem';
import Content from './components/Body/Content';
import Footer from './components/Footer/Footer';

function App() {
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('cart')) ?? []);
	const [newItem, setNewItem] = useState('');

	const saveItems = (array) => {
		setItems(array);
		localStorage.setItem('cart', JSON.stringify(array));
	};

	const addNewItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const itemObject = { id: id, checked: false, value: item };
		const newItemArray = [...items, itemObject];
		saveItems(newItemArray);
	};

	const handleCheck = (id) => {
		const mappedArray = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});
		saveItems(mappedArray);
	};

	const handleDelete = (id) => {
		const filteredArray = items.filter((item) => {
			return item.id !== id;
		});
		saveItems(filteredArray);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addNewItem(newItem);
		setNewItem(''); // reset the newItems variable so that the input field is empty
	};

	return (
		<>
			<div className="container box">
				<Header title={'Shopping Cart'} />
				<AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
				<Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
				<Footer itemNumber={items.length} />
			</div>
		</>
	);
}

export default App;
