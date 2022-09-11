import React, {useState} from 'react'
import '../css/searchstyle.css'
import searchIcon from '../img/search.svg'
import removeTextIcon from '../img/cruz.png'

const Search = () => {
    
    // show remove search button when there's text in the input
    const [text, setText] = useState("")
    const inputText = event => {
        setText(event.target.value)
    }

    // remove text from the input search field
    const removeText = () => {
        setText('')
    }

    const enterPress = event => {
        if(event.key === "Enter") {
            window.location.href = 'https://www.google.com.uy/search?q='+text
        } 
    }
  
    return (
       <div className='searchContainer'>
            <div className='searchBox'>
                <div className='searchIcons'>
                    <img src={searchIcon} alt="Búsqueda"></img>
                </div>
                <input onChange={inputText} id="inputSearch" value={text} onKeyPress={enterPress}></input>
                {text ? <div id='removeText' className='searchIcons' onClick={removeText}>
                        <img src={removeTextIcon} className="removeTextIcon" alt='removeTextIcon' title='Clear'></img>
                        </div> 
                      : null
                }
            </div>
       </div> 
    )
} 

export default Search