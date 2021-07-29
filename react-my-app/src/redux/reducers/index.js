import { combineReducers } from 'redux';
import songsReducer from './songsReducer';
import selectedSongReducer from './selectedSongReducer'

const rootReducer =  combineReducers({
    songsList : songsReducer,
    songSelected : selectedSongReducer
})

export default rootReducer;