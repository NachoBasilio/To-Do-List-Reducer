import PropTypes from 'prop-types'
import UserContext from './UserContext'
import { useState } from 'react'



export default function UserPorvider({children}) {
    const [user, setUser] = useState(null)


  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

UserPorvider.propTypes = {
    children: PropTypes.node.isRequired
}