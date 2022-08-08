import React, { useState, useEffect } from 'react';
import './Caracters.css';

const Caracters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, [])

    return (
        <div className='Characters mt-5'>
            <div className='container-fluid'>
                <div className='row justify-content-center align-items-center'>
                    {characters.map((character) => (
                        <div className="card col-12 col-md-3 ms-3 mb-3">
                            <img src={character.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p>{character.status}</p>
                                <p>{character.species}</p>
                                <p>{character.gender}</p>
                                <p>{character.location.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { Caracters };