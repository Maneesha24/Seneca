import React from 'react';
import User from './individualUser.js'

import 'whatwg-fetch';

class Users extends React.Component{  
    
state = {
users: [],
}

async componentDidMount() {
try {
const res = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
const users = await res.json();
console.log(users)
this.setState({
users: users,
});
} catch (err) {
console.log(err);
}
}


render() {
return (
<div>
    <p>Here are some details about user</p>

{this.state.users.map(user => <User key={user.id} user={user} />)}
</div>
);
}
}


               export default Users;




               
               
               
               
