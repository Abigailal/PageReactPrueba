import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
import useCharacters from '../../hook/useCharacter';
import Search from '../Search/Search';
import './Caracters.css';

const initialState = { favorites: [] };
const API = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }
}

const Caracters = () => {
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);
    const characters = useCharacters(API);


    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    };

    // const handleSearch = () => {
    //   setSearch(event.target.value);
    //   setSearch(searchInput.current.value);
    // }
    const handleSearch = useCallback(() => {
        setSearch(searchInput.current.value);
    }, []);

    // const filteredUsers = characters.filter((user) => {
    //   return user.name.toLowerCase().includes(search.toLowerCase());
    // })
    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters, search]
    );


    return (
        <div className='Characters mt-5'>
            <div className='container-fluid'>
                <div className='row justify-content-center align-items-center'>
                    <h3>Favoritos</h3>
                    {favorites.favorites.map(favorite => (
                        <div className="card col-12 col-md-3 ms-3 mb-3" key={favorite.id}>
                            <img src={favorite.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{favorite.name}</h5>
                                <p>{favorite.status}</p>
                                <p>{favorite.species}</p>
                                <p>{favorite.gender}</p>
                                <p>{favorite.location.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr></hr>
                <div className='row justify-content-center align-items-center'>
                    <h3>Todos</h3>
                    <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
                    {filteredUsers.map((character) => (
                        <div className="card col-12 col-md-3 ms-3 mb-3" key={character.id}>
                            <img src={character.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p>{character.status}</p>
                                <p>{character.species}</p>
                                <p>{character.gender}</p>
                                <p>{character.location.name}</p>
                                <button type='button' className='btn btn-info'
                                    onClick={() => handleClick(character)}
                                >Agregar a Favoritos</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { Caracters };