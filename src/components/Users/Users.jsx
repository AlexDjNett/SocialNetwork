import React  from "react";
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1 ,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu0K28aahVT3VB9wACeH4iNcww_YYSl8gog&usqp=CAU' ,
                    followed: false ,
                    fullName: 'Aleksey' ,
                    status: 'I am mask' ,
                    location: {city: 'Warshava' , country: 'Poland'}
                } ,
                {
                    id: 2 ,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5OwzOIIh-LwE0zsPgai2tbWQmq0BvKJYQg&usqp=CAU' ,
                    followed: true ,
                    fullName: 'Kirill' ,
                    status: 'I am judge' ,
                    location: {city: 'NY' , country: 'USA'}
                } ,
                {
                    id: 3 ,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXrwAOHmMDRX-a3YbiR3k0lhKh1nzpX8jJw&usqp=CAU' ,
                    followed: false ,
                    fullName: 'Michael' ,
                    status: 'I am fighter' ,
                    location: {city: 'Barselona' , country: 'Spain'}
                } ,
                {
                    id: 4 ,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwbmgiyFnxRJqafPrnfwjIsFYS5ffteiJPw&usqp=CAU' ,
                    followed: true ,
                    fullName: 'Leonid' ,
                    status: 'I am fishman' ,
                    location: {city: 'Antal' , country: 'Turkish'}
                }

            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}

export default Users;