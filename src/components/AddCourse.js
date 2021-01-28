import { useState } from 'react'
// Each input has its own component level state

const AddCourse = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [desc, setDesc] = useState('')
    const [complete, setComplete] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add text.')
            return
        }

        onAdd({ text, desc, complete })
        //Clear selections
        setText('')
        setDesc('')
        setComplete(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text}
                       onChange={ (e) => setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Description</label>
                <input type="text" placeholder='Add Description' value={desc}
                       onChange={ (e) => setDesc(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Completed</label>
                <input type="checkbox" value={complete}
                       onChange={ (e) => setComplete(e.currentTarget.checked)}/>
            </div>

            <input
                type="submit"
                checked={complete}
                value='Save Task'
                className='btn btn-block'/>

        </form>
    )
}

export default AddCourse
