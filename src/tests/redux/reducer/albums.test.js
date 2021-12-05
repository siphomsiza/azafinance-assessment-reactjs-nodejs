import reducer from '../../../redux/reducer/albums';
import {initialState} from '../../../redux/reducer/albums';

describe('SEARCH_ALBUMS_REQUEST', () => {
  test('is correct', () => {
    const action = { type: 'SEARCH_ALBUMS_REQUEST' }
    const expected = { loading: true, errorMessage: null}
    expect(reducer({}, action)).toEqual(expected);
  });
})

describe('SEARCH_ALBUMS_SUCCESS', () => {
  it('should handle GET_POST_START', () => {
    const startAction = {type: 'SEARCH_ALBUMS_SUCCESS',payload: [{id: 15381355, title: "Zimami Balibalele", link: "https://www.deezer.com/album/15381355", cover: "https://api.deezer.com/album/15381355/image"}]};
    const expectedState = {"albums": [{id: 15381355, title: "Zimami Balibalele", link: "https://www.deezer.com/album/15381355", cover: "https://api.deezer.com/album/15381355/image"}],"loading": false}
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, startAction)).toEqual(expectedState);
  });
});

describe('SEARCH_ALBUMS_FAILURE', () => {
  it('should handle SEARCH_ALBUMS_FAILURE', () => {
    const action = {type: "SEARCH_ALBUMS_FAILURE"}
    expect(reducer({}, action)).toEqual({"errorMessage": undefined,"loading": false})
  });
});

describe('SEARCH_PLAYLIST_REQUEST', () => {
  it('should handle SEARCH_PLAYLIST_REQUEST', () => {
    const action = {type: "SEARCH_PLAYLIST_REQUEST"}
    expect(reducer({}, action)).toEqual({"errorMessage": null,"loading": true})
  });
});

describe('SEARCH_PLAYLIST_SUCCESS', () => {
  it('should handle SEARCH_PLAYLIST_SUCCESS', () => {
    const action = {type: "SEARCH_PLAYLIST_SUCCESS",payload: [{id: 462812, name: "Nothembi Mkhwebane", link: "https://www.deezer.com/artist/462812", picture: "https://api.deezer.com/artist/462812/image"}]}
    const expectedOutCome = {"playlist": [{"id": 462812, "link": "https://www.deezer.com/artist/462812", "name": "Nothembi Mkhwebane", "picture": "https://api.deezer.com/artist/462812/image"}], "loading": false}
    expect(reducer({}, action)).toEqual(expectedOutCome)
  });
});
