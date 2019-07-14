import React from 'react'
import SearchBar from './SearchBar'
import EmojiList from './EmojiList'


class App extends React.Component {

    state = { emojiTerm: '' }

    onChangeSearch = (searchTerm) => {
        //console.log(searchTerm)
        this.setState({ emojiTerm: searchTerm })
    }

    render() {
        return (
            <div className="ui container ">
               
                <SearchBar onChange={this.onChangeSearch} />
                <EmojiList emojiTerm={this.state.emojiTerm}/>
              
            </div>
        )
    }
}

export default App