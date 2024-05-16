// AdminPage.js
import React, { useState } from 'react';

const AdminPage = () => {
    // State to store the list of tours
    const [tours, setTours] = useState([]);

    // Function to add a new tour
    const addTour = (tour) => {
        setTours([...tours, tour]);
    };

    // Function to delete a tour
    const deleteTour = (id) => {
        setTours(tours.filter(tour => tour.id !== id));
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {/* Form to add a new tour */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Tour Name" value={tourName} onChange={handleChange} />
                <button type="submit">Add Tour</button>
            </form>
            {/* List of tours */}
            <ul>
                {tours.map(tour => (
                    <li key={tour.id}>
                        {tour.name}
                        <button onClick={() => deleteTour(tour.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
