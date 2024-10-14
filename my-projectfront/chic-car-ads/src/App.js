import React, { useEffect, useState } from 'react';
import { CarCard } from './components/CarCard';
import './styles/App.css';

const App = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            const response = await fetch('http://localhost:1337/api/cars');
            const data = await response.json();
            console.log(data); // Log des données de l'API
            setCars(data.data); // Mettez à jour l'état avec les données des voitures
        };

        fetchCars();
    }, []);

    return (
        <div className="App">
            <h1>Annonce de Voitures</h1>
            <div className="car-list">
                {cars.length > 0 ? (
                    cars.map((car) => <CarCard key={car.id} car={car} />)
                ) : (
                    <p>Aucune voiture disponible.</p> // Message si aucune voiture n'est trouvée
                )}
            </div>
        </div>
    );
};

export default App;
