import React, { useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const AddCategory = ({ onAdded }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleAdd = () => {
        axiosInstance.post('/categories', { name, description: desc })
            .then(() => {
                alert("Əlavə olundu!");
                onAdded();
            });
    };

    return (
        <div className="edit-form">
            <h1>ADD CATEGORY</h1>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
            <button className="order-btn" onClick={handleAdd}>ADD</button>
        </div>
    );
};

export default AddCategory;