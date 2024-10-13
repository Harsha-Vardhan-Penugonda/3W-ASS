import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import Dashboard from './components/Dashboard';
import db from './back-end/config/dbConfig'; // Adjusted path to dbConfig

function App() {
    const [dbStatus, setDbStatus] = useState('Checking connection...');

    useEffect(() => {
        db.query('SELECT 1', (err) => {
            if (err) {
                setDbStatus('Database connection failed.');
                console.error('Database connection error:', err);
            } else {
                setDbStatus('Database connected successfully!');
            }
        });
    }, []);

    return (
        <Router>
            <div className="App">
                <header className="bg-blue-500 p-4">
                    <h1 className="text-white text-2xl">Social Media Submission</h1>
                    <nav>
                        <Link to="/" className="text-white mr-4">Home</Link>
                        <Link to="/admin" className="text-white">Admin Dashboard</Link>
                    </nav>
                </header>
                <div className="p-4">
                    <p className="text-lg">{dbStatus}</p>
                </div>
                <Routes>
                    <Route path="/" element={<UserForm />} />
                    <Route path="/admin" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
