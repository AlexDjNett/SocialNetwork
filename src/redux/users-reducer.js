const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1 , photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu0K28aahVT3VB9wACeH4iNcww_YYSl8gog&usqp=CAU',
        //     followed: false, fullName: 'Aleksey' , status: 'I am mask', location: {city: 'Warshava', country: 'Poland'}} ,
        // {id: 2 , photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5OwzOIIh-LwE0zsPgai2tbWQmq0BvKJYQg&usqp=CAU',
        //     followed: true, fullName: 'Kirill' , status: 'I am judge', location: {city: 'NY', country: 'USA'}} ,
        // {id: 3 , photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXrwAOHmMDRX-a3YbiR3k0lhKh1nzpX8jJw&usqp=CAU',
        //     followed: false, fullName: 'Michael' , status: 'I am fighter', location: {city: 'Barselona', country: 'Spain'}} ,
        // {id: 4 , photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwbmgiyFnxRJqafPrnfwjIsFYS5ffteiJPw&usqp=CAU',
        //     followed: true, fullName: 'Leonid' , status: 'I am fishman', location: {city: 'Antal', country: 'Turkish'}}

    ]
};

const usersReducer = (state = initialState , action) => {
    switch (action.type) {
        case FOLLOW:
                return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                } )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                } )
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;