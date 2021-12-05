import React, {useReducer, useEffect } from 'react';

import { initialState, reducer } from '../../redux/reducer/artists';
import { useHistory } from 'react-router-dom';

import SearchBar from '../../components/search-bar/search-bar-component';
import CollectionPreview from '../../components/collection-preview/collection-preview';


import './artists.styles.scss'

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let history = useHistory();

    useEffect(() => {
        //fetch(`https://corsanywhere.herokuapp.com/https://api.deezer.com/search/artist?q=`)
        fetch(`/search/artist?q=`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "SEARCH_MOVIES_SUCCESS",
                    payload: data.data
                });
            });
    }, []);

    const search = async (searchArtist) => {
        dispatch({
            type: "SEARCH_ARTISTS_REQUEST"
        });
        //fetch(`https://corsanywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${searchArtist}`)
        fetch(`/search/artist?q=${searchArtist}`)
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    dispatch({
                        type: "SEARCH_ARTISTS_SUCCESS",
                        payload: data.data
                    });
                } else {
                    dispatch({
                        type: "SEARCH_ARTISTS_FAILURE",
                        error: data.Error
                    });
                }
                if (history.location.pathname === "/artist"){
                  state.artists = data.data
                  history.push({
                       pathname: '/'
                     });
                }
            });
    };

    const { artists, loading } = state;
    return (
            loading === true ? <div className="loading">Loading...</div>
            :

            <div className="shop-page">
                <>
                    {/* <h1>Artist List</h1> */}
                      <SearchBar search={search}/>

                    {
                        <CollectionPreview data={artists} />
                    }
                </>

            </div>)

}

export default Home;
