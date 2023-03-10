import { Component } from 'react';
import Seachbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

// const KEY = '34173138-558a9ee15c3093426fbf117d9';
// const BASE_URL = 'https://pixabay.com/api';
// componentDidMount() {
//   fetch(
//     `${BASE_URL}/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(res => res.json().then(picture => this.setState({picture})));
// }

class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Seachbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
