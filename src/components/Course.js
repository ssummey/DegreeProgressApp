import { FaTimes } from 'react-icons/fa'

const course = ({course, onDelete, onToggle, onVisible}) => {

    return (
        // Template literal logic adds and removes border for reminders
        // course comes down from state and check reminder
        <div className='course'>

            <h3>
                <input className='complete-check-box' type='checkbox' value={course.complete}
                    onClick={() => onToggle(course.id)}
                       checked={course.complete}/>
                <div className='text'>{course.text} </div>
                <div className='text'>{course.description}</div>
                <FaTimes style={{color: 'red',
                cursor: 'pointer'}}
                                     onClick={() => onDelete(course.id)} />
            </h3>


        </div>
    )
}

export default course
