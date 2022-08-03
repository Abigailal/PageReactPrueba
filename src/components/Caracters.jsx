import React, { useState, useEffect } from 'react';

const Caracters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, [])

    return (
        <div className='Characters mt-5'>
            {characters.map((character) => (
            <div className="card">
                <img src={character.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>

                </div>
            </div>
            ))}
        </div>
    );
}

export { Caracters };