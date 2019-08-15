import React ,{Component}from 'react';
import SearchBar from'./Component/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from'./Component/VideoList';
import VideoItemShow from'./Component/VideoItemShow';

const APIKey='AIzaSyA2uFBWnxK82TUgWJr0dN2a68t39qyMPDI';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos:[],
      selectedVideo:null,
      videoSearch:('plane')
    };
    this.videoSearch('plane');
  }
  //  importo plane
  videoSearch(searchTerm){
    YTSearch({key:APIKey, term:searchTerm},(data)=>{
      this.setState({
        videos:data,
        selectedVideo:data[0],
        videoSearch:('plane')
      });
    });
  }
  render(){
  return (
    <div >
      Youtube Project
       <SearchBar onSearchTermChange={searchTerm=>this.videoSearch(searchTerm)}/>

         <VideoItemShow video={this.state.selectedVideo}/>

       <VideoList  onVideoSelect={userSelected => this.setState({selectedVideo:userSelected})}
       videos={this.state.videos}/>
    </div>
  );
}
}

export default App;
