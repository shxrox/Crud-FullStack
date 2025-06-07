import React, { useEffect, useState } from 'react';
import {
  getCrud,
  addCrud,
  updateCrud,
  deleteCrud,
} from '../ServiceApi/CrudApi';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { RxUpdate } from 'react-icons/rx';

function CrudApp() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', email: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getCrud();
    setItems(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      ...form,
      age: parseInt(form.age),
    };

    if (isEdit) {
      await updateCrud(editId, dataToSend);
    } else {
      await addCrud(dataToSend);
    }

    setForm({ name: '', age: '', email: '' });
    setIsEdit(false);
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      age: item.age.toString(),
      email: item.email,
    });
    setIsEdit(true);
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    await deleteCrud(id);
    fetchData();
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>CRUD App</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '1rem' }}
      />

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: '8px', marginRight: '0.5rem', width: '30%' }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
          style={{ padding: '8px', marginRight: '0.5rem', width: '20%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: '8px', marginRight: '0.5rem', width: '30%' }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
          title={isEdit ? 'Update' : 'Add'}
        >
          {isEdit ? <RxUpdate size={20} /> : 'Add'}
        </button>
      </form>

      {/* List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredItems.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '12px',
              marginBottom: '10px',
              backgroundColor: '#f4f4f4',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '6px',
            }}
          >
            <div>
              <strong>{item.name}</strong> — Age: {item.age}, Email: {item.email}
            </div>
            <div>
              <button
                onClick={() => handleEdit(item)}
                title="Edit"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: 'blue',
                  marginRight: '10px',
                }}
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                title="Delete"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: 'red',
                }}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
