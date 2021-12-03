import React, {useReducer, useEffect } from 'react';

import { initialState, albumReducer } from '../../redux/reducer/albums';
import AlbumPreview from '../../components/album-preview/collection-preview';
import Artists from '../artists/artists.component';

import './artist.styles.scss'

const Artist = (props) => {
    const [state, dispatch] = useReducer(albumReducer, initialState);
    const artist = props.location.state;

    useEffect(() => {
        dispatch({
            type: "SEARCH_ALBUMS_REQUEST"
        });

          fetch(`https://private-cors-server.herokuapp.com/https://api.deezer.com/search/album?q=${artist.name}`)
        //fetch(`/search/album?q=${artist.name}`)
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    dispatch({
                        type: "SEARCH_ALBUMS_SUCCESS",
                        payload: data.data
                    });
                } else {
                    dispatch({
                        type: "SEARCH_ALBUMS_FAILURE",
                        error: data.Error
                    });
                }
            });

            getPlaylist();

    }, []);

    const getPlaylist = () => {
        dispatch({
            type: "SEARCH_PLAYLIST_REQUEST"
        });

        //fetch(`https://private-cors-server.herokuapp.com/${artist.tracklist}`)
        fetch(`https://private-cors-server.herokuapp.com/https://api.deezer.com/${artist.tracklist.substring(22, artist.tracklist.length)}`)
        //fetch(`${artist.tracklist.substring(22, artist.tracklist.length)}`)
            .then(response => response.json())
            .then(data => {
                console.log(`https://private-cors-server.herokuapp.com/https://api.deezer.com/${artist.tracklist.substring(22, artist.tracklist.length)}`)
                if (data.data) {
                    dispatch({
                        type: "SEARCH_PLAYLIST_SUCCESS",
                        payload: data.data
                    });
                } else {
                    dispatch({
                        type: "SEARCH_PLAYLIST_FAILURE",
                        error: data.Error
                    });
                }
            })
    }


    const { albums, errorMessage, loading, playlist } = state;

    const artistAlbums = albums.map((item, index) => {
        const formattedAlbum = {
            artist: item.artist,
            name: item.title,
            picture: item.cover,
            picture_big: item.cover_big,
            type: item.type,
            nb_fan: item.nb_fan,
            nb_album: item.nb_album
        }
        return formattedAlbum
    })

    return (
            loading === true && errorMessage ? <div><text>Loading...</text></div> :

            <div>
                <div className='artists_homepage'><Artists/></div>
                <div className="collection-pr">
                    <div className="preview">
                        <div className="artist-item">
                            <div
                                className="image"
                                style={{ backgroundImage: `url(${artist.picture_big})` }}
                            />
                            <div className="artist-footer">
                                <span className="name">{artist.name}</span>
                                {typeof artist.nb_fan === 'undefined' ? '' : <span className="fans"> Fans: {artist.nb_fan}</span>}
                            </div>
                            <div className="artist-playlist">

                                <div className="playlist">
                                    <span className="playlist">Top Tracks:</span>
                                    {
                                        playlist.filter((item, idx) => idx < 5)
                                            .map((item, index) => (
                                                <div key={index} className="tracklist row">
                                                    <div className="tracklist-title"> {index + 1} : {item.title}</div>
                                                    <div className="duration" >{Math.floor(item.duration / 60)}:{item.duration - Math.floor(item.duration / 60) * 60}</div>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <AlbumPreview data={artistAlbums} />
            </div>
    )
}
export default Artist;
