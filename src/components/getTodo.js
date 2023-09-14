import { useEffect, useState } from "react";


export const useTodo = (id) => {
        const [todo, setTodo] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            setTodo(data);
        })
    }, [id])

    return todo;
}
