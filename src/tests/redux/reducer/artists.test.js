import reducer from '../../../redux/reducer/artists';
import {initialState} from '../../../redux/reducer/artists';

describe('SEARCH_MOVIES_SUCCESS', () => {
  test('is correct', () => {
    const action = { type: 'SEARCH_MOVIES_SUCCESS' }
    const expected = { "artists": [],"loading": false }
    expect(reducer({}, action)).toEqual(expected);
  });
})

describe('SEARCH_ARTISTS_REQUEST', () => {
  it('should handle GET_POST_START', () => {
    const startAction = {type: 'SEARCH_ARTISTS_REQUEST'};
    const expectedState = { loading: true, errorMessage: null }
    // it's empty on purpose because it's just starting to fetch posts
    expect(reducer({}, startAction)).toEqual(expectedState);
  });
});

describe('SEARCH_ARTISTS_FAILURE', () => {
  it('should handle SEARCH_ARTISTS_FAILURE', () => {
    const action = {type: "SEARCH_ARTISTS_FAILURE"}
    expect(reducer(undefined, action)).toEqual({"errorMessage": undefined,"loading": false})
  });
});

describe('SEARCH_ARTISTS_SUCCESS', () => {
  it('should handle SEARCH_ARTISTS_SUCCESS', () => {
    const action = {type: "SEARCH_ARTISTS_SUCCESS",payload: [{id: 462812, name: "Nothembi Mkhwebane", link: "https://www.deezer.com/artist/462812", picture: "https://api.deezer.com/artist/462812/image"}]}
    const expectedOutCome = {"artists": [{"id": 462812, "link": "https://www.deezer.com/artist/462812", "name": "Nothembi Mkhwebane", "picture": "https://api.deezer.com/artist/462812/image"}], "loading": false}
    expect(reducer(undefined, action)).toEqual(expectedOutCome)
  });
});
