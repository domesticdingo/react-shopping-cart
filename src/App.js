import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		const newItem = {
			id: item.id,
			title: item.title,
			price: item.price,
			image: item.image
		}
		setCart({...cart, newItem})
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={{ cart }}>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route
					exact
					path="/"
					render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>
					)}
				/>

				<Route exact path="/" component={Products} />
			</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
