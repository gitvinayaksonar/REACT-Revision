const songsReducer = (state = [], action) => {
    return [
        {
            id : 1,
            name : 'minchagi neenu',
            time : 5.5
        },
        {
            id : 2,
            name : 'anisutide',
            time : 6
        },
        {
            id : 3,
            name : 'stylo',
            time : 4.5
        }
    ]
}

export default songsReducer;