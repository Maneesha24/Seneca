import React, {Component} from 'react';

class User extends Component{
    
    state = {isHidden : true}
             

render(){
return(
<div>

<div className="indv">
    <p className="id"><span>User :</span>{this.props.user.id}</p>
    <p className = "title"><span>Title :</span>{this.props.user.title}</p><br/>
            {this.state.isHidden ? <div><span>Body :</span>{this.props.user.body}</div> : null}

    </div>

    <button>Show</button>

</div>

)
}
}

export default User;
