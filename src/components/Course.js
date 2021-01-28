import { FaTimes } from 'react-icons/fa'

const course = ({course, onDelete, onToggle}) => {

    return (
        // Template literal logic adds and removes border for reminders
        // course comes down from state and check reminder
        <div className={ `course ${course.complete ? 'complete' : ''}` }
             onDoubleClick={() => onToggle(course.id)}>

            <h3>
                <input className='complete-check-box' type='checkbox'/>
                <div className='text'>{course.text}</div>
                <div className='text'>{course.desc}</div>
                <FaTimes style={{color: 'red',
                cursor: 'pointer'}}
                                     onClick={() => onDelete(course.id)} />
            </h3>


        </div>
    )
}

export default course
