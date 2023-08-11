import PropTypes from 'prop-types'
import UserContext from './UserContext'

export default function UserPorvider({children}) {
  return (
    <UserContext.Provider value={{hola:"mundo"}}>
        {children}
    </UserContext.Provider>
  )
}

UserPorvider.propTypes = {
    children: PropTypes.node.isRequired
}