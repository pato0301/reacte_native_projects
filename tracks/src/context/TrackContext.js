import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload
        default:
            return state;
    }
}

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');
    dispatch({ type: 'fetch_tracks', payload: response.data })
};

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations })
};

// first argument always reducer
// second one always functions to dispatch
// initial states
export const {Provider, Context} = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)