import { useContext } from "react"
import { ThemeContext } from "./themeContext"

export const Avatar = () => {
    const theme = useContext(ThemeContext);

    return (
        <div 
        style={{ width: '64px', height: '64px', borderRadius: '32px', border: `2px solid ${theme === 'light' ? 'black' : 'lightblue'}`, background: 'lightgrey'}}>

        </div>
    )
}