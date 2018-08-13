import React, {Component} from 'react';

class User extends Component{
render(){
return(
<div className="indv">{this.props.user.id}
    {this.props.user.Id}
    {this.props.user.title}
    <button >Posts</button>
</div>

)
}
}

export default User;
