
const Todos = ({ todos, deleteTodo }) => {
    return (
        <div className="todos collection">
            {
                todos.length ?
                    todos.map(todo => {
                        return (
                            <div className="todo collection-item" key={todo.id}>
                                <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                            </div>
                        )
                    })
                    :
                    <div className="center">Please make some todo items</div>
            }
        </div>
    )
}

export default Todos
