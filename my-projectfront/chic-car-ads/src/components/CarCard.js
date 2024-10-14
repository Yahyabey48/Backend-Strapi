import React from "react";
import './CarCard.css';

export const CarCard = ({ car }) => {
    console.log(car); // Log des données de la voiture

    // Assurez-vous que car est bien défini
    if (!car) {
        return <div>Loading...</div>;
    }

    // Utilisez directement les propriétés de car
    const { voiture, prix } = car; // Pas besoin d'accéder à car.attributes

    return (
        <div className="car-card">
            <h2 className="car-name">{voiture}</h2>
            <p className="car-price">{Number(prix).toLocaleString()} €</p>
        </div>
    );
};
