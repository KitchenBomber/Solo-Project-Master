import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_HOURS" actions
function* fetchHours() {
    console.log('in fetchHours');

    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const response = yield axios.get('/api/history', config);
        yield put({ type: 'SET_HOURS', payload: response.data });
    } catch (error) {
        console.log('History get request failed', error);
    }
}

function* historySaga() {
    yield takeLatest('FETCH_HOURS', fetchHours);
}

export default historySaga;