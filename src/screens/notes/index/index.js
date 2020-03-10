import React, { Fragment, useState } from 'react'
import HeaderLogged from '../../../components/HeaderLogged'
import Notes from '../../../components/Notes'

const NotesScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
    </Fragment>
  )
}

export default NotesScreen