import React, {useContext} from 'react'
import ThemeContext from '../../contexts/theme-context'

const Layout = ({children}) => {
   const {theme} = useContext(ThemeContext);

   return (
       <div style={{background: theme.background, color:theme.font}}>
           {children}
       </div>
   )
}

export default Layout
