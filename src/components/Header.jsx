import React from 'react'

export default function Header(props) {
    const { todos } = props
    const totalTodosLength = todos.length

    return (
        <>
            <header>
                <h1 className="text-gradient">Todo: {totalTodosLength}</h1>
            </header>
        </>
    )
}
