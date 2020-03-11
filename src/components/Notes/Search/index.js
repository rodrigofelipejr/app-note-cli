import React, { useState } from 'react'
import { Input, Column } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Search(props) {
  const [query, setQuery] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.searchNotes(query)
    }
  }

  const handleSearch = () => {
    props.fetchNotes()
    setQuery('')
  }

  return (
    <Column.Group className='is-vcentered' breakpoint='mobile'>
      <Column size='9' offset={1}>
        <Input type='text'
          name={query}
          value={query}
          placeholder='Search note...'
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} />
      </Column>
      <Column size={1}>
        <button
          onClick={handleSearch}>
          <FontAwesomeIcon
            icon={faTimes}
            color="grey"
            className="is-pulled-left  "
          />
        </button>
      </Column>
    </Column.Group>
  )
}

export default Search