import React from 'react'
import emojiList from '../emojiList.json'

class EmojiList extends React.Component {

    renderList = () => {
        const emojiTerm = this.props.emojiTerm
        const emojiListFound = emojiList.filter((emoji) => {
            if (emoji.title.toLowerCase().includes(emojiTerm.toLowerCase())) {
                return true
            }
            if (emoji.keywords.includes(emojiTerm)) {
                return true
            }
            return false
        }).slice(0, 10)

        //console.log(emojiListFound)

        return (
            <div className="ui massive list">
                {emojiListFound.map((emoji) => {
                    return (
                        <div key={emoji.title} className="item">
                            {emoji.symbol }
                            {emoji.title }
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (<div >{this.renderList()}</div>)
    }
}

export default EmojiList

