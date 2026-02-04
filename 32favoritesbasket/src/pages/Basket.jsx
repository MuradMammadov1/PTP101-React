import React from 'react';

const Basket = ({ basket, setBasket }) => {
    const updateCount = (id, delta) => {
        setBasket(basket.map(item => 
            item.id === id ? { ...item, count: Math.max(1, item.count + delta) } : item
        ));
    };

    const removeItem = (id) => setBasket(basket.filter(item => item.id !== id));

    return (
        <div className="container">
            <h1>Basket</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Increase</th>
                        <th>Count</th>
                        <th>Decrease</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => updateCount(item.id, 1)}>+</button></td>
                            <td>{item.count}</td>
                            <td><button onClick={() => updateCount(item.id, -1)}>-</button></td>
                            <td><button onClick={() => removeItem(item.id)} className="btn-remove">x</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="order-btn">ORDER</button>
        </div>
    );
};

export default Basket;