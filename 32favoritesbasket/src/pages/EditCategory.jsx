import React, { useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const EditCategory = ({ category, onSave }) => {
    const [name, setName] = useState(category.name);
    const [desc, setDesc] = useState(category.description);

    const handleUpdate = () => {
        axiosInstance.put(`/categories/${category.id}`, { name, description: desc })
            .then(() => onSave());
    };

    return (
        <div className="edit-form">
            <h1>EDIT CATEGORY</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={desc} onChange={(e) => setDesc(e.target.value)} />
            <button className="order-btn" onClick={handleUpdate}>EDIT</button>
        </div>
    );
};

export default EditCategory;