import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
    render() {
        const {
            items,
            updateTodosToShow,
            clearList,
            handleDelete,
            handleEdit,
            handleDoneTask,
            handleDeleteDoneTasks
        } = this.props
    
    return (
        <Fragment>
            <h3 className="text-center mt-5">Lista Tareas</h3>

            <div className="row mb-4">
                <div className="col-md-4">
                    <button type="button" className="btn btn-info btn-block mt-1 w-100" onClick={() => updateTodosToShow("all")}>Todo
                    </button>
                </div>

                <div className="col-md-4">
                    <button type="button" className="btn btn-info btn-block mt-1 w-100" onClick={() => updateTodosToShow("done")}>
                        Hechas
                    </button>
                </div>

                <div className="col-md-4">
                    <button type="button" className="btn btn-info btn-block mt-1 w-100" onClick={() => updateTodosToShow("todo")}>
                        Por hacer
                    </button>
                </div>
            </div>

            {
                items.length === 0 ? '' :
                    <ul className="list-group list-group-flush">
                        {
                                items.map(item => {
                                    return (
                                        <TodoItem 
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            completed={item.completed}
                                            handleDelete={() => handleDelete(item.id)}
                                            handleEdit={() => handleEdit(item.id)}
                                            handleDoneTask={handleDoneTask}
                                         />
                                )
                            })
                        }

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <button type="button" className="btn btn-danger btn-block mt-1 w-100" onClick={handleDeleteDoneTasks}>
                                    Borrar tareas hechas
                                </button>
                            </div>

                            <div className="col-md-6">
                                <button type="button" className="btn btn-danger btn-block mt-1 w-100" onClick={clearList}>
                                Borrar todas las tareas
                                </button>
                            </div>
                        </div>
                    </ul>
            }
        </Fragment>
    )
    }
}