import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { contentService } from '../../firebase/contentService';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState('stories'); // 'stories' or 'events'
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [loading, setLoading] = useState(false);

    // Dynamic Form Data based on activeTab
    const initialStoryData = { title: '', description: '', image: '', icon: '' };
    const initialEventData = {
        title: '',
        type: 'Online',
        date: '',
        start: '',
        end: '',
        link: '',
        address: '',
        img: ''
    };

    const [formData, setFormData] = useState(initialStoryData);

    useEffect(() => {
        // Reset form when tab changes
        setFormData(activeTab === 'stories' ? initialStoryData : initialEventData);
        setEditingItem(null);

        const unsubscribe = contentService.subscribe(activeTab, (data) => {
            setItems(data);
        });
        return () => unsubscribe();
    }, [activeTab]);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.error('Failed to logout', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (editingItem) {
                await contentService.update(activeTab, editingItem.id, formData);
            } else {
                await contentService.add(activeTab, formData);
            }
            setFormData(activeTab === 'stories' ? initialStoryData : initialEventData);
            setEditingItem(null);
        } catch (err) {
            console.error('Operation failed', err);
            alert('Failed to save item');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setFormData({ ...item });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await contentService.delete(activeTab, id);
            } catch (err) {
                console.error('Delete failed', err);
                alert('Failed to delete item');
            }
        }
    };

    const renderStoryForm = () => (
        <>
            <div className={styles.inputGroup}>
                <label>Title</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label>Description</label>
                <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label>Image URL</label>
                <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/story-image.jpg"
                />
            </div>
            <div className={styles.inputGroup}>
                <label>Icon URL</label>
                <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    placeholder="https://example.com/icon.svg"
                />
            </div>
        </>
    );

    const renderEventForm = () => (
        <>
            <div className={styles.inputGroup}>
                <label>Event Title</label>
                <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                />
            </div>
            <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                    <label>Type</label>
                    <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label>Date</label>
                    <input
                        type="text"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        placeholder="e.g. 16, March 2025"
                        required
                    />
                </div>
            </div>
            <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                    <label>Start Time</label>
                    <input
                        type="text"
                        value={formData.start}
                        onChange={(e) => setFormData({ ...formData, start: e.target.value })}
                        placeholder="01:30 PM"
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>End Time</label>
                    <input
                        type="text"
                        value={formData.end}
                        onChange={(e) => setFormData({ ...formData, end: e.target.value })}
                        placeholder="02:30 PM"
                        required
                    />
                </div>
            </div>
            {formData.type === 'Online' ? (
                <div className={styles.inputGroup}>
                    <label>Meeting Link</label>
                    <input
                        type="url"
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        placeholder="https://meet.google.com/..."
                    />
                </div>
            ) : (
                <div className={styles.inputGroup}>
                    <label>Location Address</label>
                    <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="123 Street Name, City"
                    />
                </div>
            )}
            <div className={styles.inputGroup}>
                <label>Event Image URL</label>
                <input
                    type="text"
                    value={formData.img}
                    onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                    placeholder="https://example.com/event-image.jpg"
                />
            </div>
        </>
    );

    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>Admin Dashboard</h1>
                    <div className={styles.userSection}>
                        <span>Welcome, {user.email}</span>
                        <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <aside className={styles.sidebar}>
                    <button
                        className={activeTab === 'stories' ? styles.activeTab : ''}
                        onClick={() => setActiveTab('stories')}
                    >
                        Manage Stories
                    </button>
                    <button
                        className={activeTab === 'events' ? styles.activeTab : ''}
                        onClick={() => setActiveTab('events')}
                    >
                        Manage Events
                    </button>
                </aside>

                <section className={styles.content}>
                    <div className={styles.formContainer}>
                        <h2>{editingItem ? 'Edit Item' : 'Add New Item'}</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            {activeTab === 'stories' ? renderStoryForm() : renderEventForm()}
                            <div className={styles.buttonGroup}>
                                <button type="submit" disabled={loading} className={styles.submitBtn}>
                                    {loading ? 'Saving...' : (editingItem ? 'Update Item' : 'Add Item')}
                                </button>
                                {editingItem && (
                                    <button type="button" onClick={() => { setEditingItem(null); setFormData(activeTab === 'stories' ? initialStoryData : initialEventData) }} className={styles.cancelBtn}>
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className={styles.listContainer}>
                        <h2>Existing {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                        <div className={styles.grid}>
                            {items.map(item => (
                                <div key={item.id} className={styles.card}>
                                    {(item.image || item.img) && <img src={item.image || item.img} alt={item.title} className={styles.cardImage} />}
                                    <div className={styles.cardInfo}>
                                        <div className={styles.cardHeader}>
                                            <h3>{item.title}</h3>
                                            {item.type && <span className={styles.badge}>{item.type}</span>}
                                        </div>
                                        {item.description && <p>{item.description}</p>}
                                        {item.date && <p className={styles.metaText}>📅 {item.date} | 🕒 {item.start} - {item.end}</p>}
                                        <div className={styles.cardActions}>
                                            <button onClick={() => handleEdit(item)} className={styles.editBtn}>Edit</button>
                                            <button onClick={() => handleDelete(item.id)} className={styles.deleteBtn}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
