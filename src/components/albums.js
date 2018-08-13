import React from 'react';
import Album from './individualAlbums.js'

class Albums extends React.Component{
    
    state = {
albums: [],
}
    
    async componentDidMount() {
try {
const res = await fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
const albums = await res.json();
console.log(albums)
this.setState({
albums: albums,
});
} catch (err) {
console.log(err);
}
}
    
    
    render(){
        return(<div className= "container">
               <p>Here are the list of some pictures</p>
               
               <div className = "container-item">
               {this.state.albums.map(album => <Album key={album.id} album={album} />)}

               </div>
               
               
               </div>)
    }

               }
               
               export default Albums;
               