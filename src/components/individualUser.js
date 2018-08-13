import React, {Component} from 'react';

class User extends Component{
    
    state = {isHidden : true}
        componentDidMount(){
            this.setState({isHidden :false})
        }  

showContent = () => {
    this.setState({isHidden :true})
}
    
render(){
return(
<div>

<div className="indv">
    <p className="id"><span>User :</span>{this.props.user.id}</p>
    <p className = "title"><span>Title :</span>{this.props.user.title}</p><br/>
            {this.state.isHidden ? <div><span>Body :</span>{this.props.user.body}</div> : null}

    </div>

    <button onClick = {this.showContent}>Show</button>

</div>

)
}
}

export default User;
