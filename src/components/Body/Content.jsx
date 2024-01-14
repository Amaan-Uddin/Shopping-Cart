import List from './List';

const Content = ({ items, handleCheck, handleDelete }) => {
	return (
		<div className="my-2 section">
			{items.length ? (
				<List items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
			) : (
				<h4 className="my-2">No item in cart</h4>
			)}
		</div>
	);
};

export default Content;
