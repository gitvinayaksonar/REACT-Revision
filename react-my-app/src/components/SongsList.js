import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectSong } from '../redux/actions'

function SongsList(props) {
    const songsList = useSelector(state => state.songsList);
    const songSelected = useSelector(state => state.songSelected);
    const dispatch = useDispatch();

    return (
        <div>
            {
                songsList.map((song, i) => {
                    return (
                        <div key = {i}>
                            <div style = {{ display : 'flex', border : '2px solid blue'}}>
                                <div>{song.name} </div>
                                <button onClick = {() => dispatch(selectSong(song))}> select</button>
                            </div>
                            <div> {songSelected ? songSelected.name : null} </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return { songsList : state.songsList, songSelected : state.songSelected }
// }

export default SongsList;