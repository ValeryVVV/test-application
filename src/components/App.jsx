import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import { Avatar } from "./ColorSwitcher";
import { useTodo } from "./getTodo";


export const App = () => {
    const [theme, setTheme] = useState('light');


    // const [todo, setTodo] = useState(null);
    const [id, setId] = useState(1);

    const todo = useTodo(id); 
    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         alert(`Id: ${id}`)
    //     }, 5000)

    //     return () => {clearTimeout(timerId)};
    // }, [id])

    // if(loading) {
    //     return <div>Loading...</div>
    // }
    function changeTheme() 
        {setTheme(theme === 'light' ? 'dark' : 'light')
    }

    function changeId() 
    {setId(id + 1);
}

  return (
    <>
        <ThemeContext.Provider value={theme}>
        <Avatar />
            <div>
                Id: {id}
            </div>
            <div>
                Todo: {todo?.title}
            </div>
            <div>
                <button onClick={changeId}>Change todo</button>
                <button style={{marginLeft: '20px'}} onClick={changeTheme}>Change theme</button>
            </div>
        </ThemeContext.Provider>
    </>

  );
};
