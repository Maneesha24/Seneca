import React, {Component} from 'react';

class Album extends Component{
render(){
return(
<div className="indv">
    <img width ="200px" src ={this.props.album.url} alt = {this.props.album.title} />
    {this.props.album.title}
</div>

)
}
}

export default Album;
