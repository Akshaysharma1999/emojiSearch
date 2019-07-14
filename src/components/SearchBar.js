import React from 'react'

class SearchBar extends React.Component {

    state = { searchTern: '' }

    onInputChange=(e)=>{
        e.preventDefault()
        this.setState({term:e.target.value})
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div >
                <h1>EmojiList</h1>
                <form className="ui category search">
                    <div className="ui icon input">                      
                        <input className="promt" placeholder="Input here" value={this.state.term} onChange={(e)=>{this.onInputChange(e)}}></input>
                        <i class="search icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar