import React, { Component } from "react";


export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props

        return (
            <div className="card card-body">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        </div>

                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Nueva tarea"
                        value={item}
                        onChange={handleChange}
                    />
                    </div>

                    <button 
                        type="submit"
                        className={`btn btn-block mt-3 btn-warning w-100 ${editItem ? 'btn-success' : 'btn-info'}`}
                    >
                        {editItem ? 'Edit task' : 'Añadir nueva tarea'}
                    </button>
                </form>
            </div>
        )
    }
}

