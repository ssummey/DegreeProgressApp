import PropTypes from 'prop-types'
import Course from './Course'

const Courses = ({ courses, onDelete, onToggle}) => {


    return (
        <>
            {courses.map((course) => (
                //Looping through tasks and saving task as a prop
                <Course key={course.id} course={course} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Courses
