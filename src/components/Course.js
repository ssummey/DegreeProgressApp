import { FaTimes, FaPen } from 'react-icons/fa'

const course = ({course, onDelete, onToggle, onVisible, onEdit}) => {

    return (
        // Template literal logic adds and removes border for reminders
        // course comes down from state and check reminder
        <div className='course'>

            <div className='course'>
                <input className='complete-check-box col' type='checkbox'
                    onClick={() => onToggle(course.id)}
                       checked={course.complete}/>
                <div className='col'>{course.text} </div>
                <div className='col'>{course.description}</div>
                <div className='col'>
                <FaTimes style={{color: 'red',
                cursor: 'pointer'}}
                                     onClick={() => onDelete(course.id)} />
                <FaPen style={{color: 'green',
                    cursor: 'pointer'}}
                         onClick={() => onEdit(course.id)} />
            </div>
            </div>
        </div>
    )
}

export default course
