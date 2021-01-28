import Header from './components/Header'
import Courses from './components/Courses'
import { useState } from 'react'
import AddCourse from './components/AddCourse'

function App() {
    const [showAddCourse, setShowAddCourse] = useState(false)
    const [courses, setCourse] = useState(
        [
            {
                id: 1,
                text: 'CSE101',
                desc: 'Intro to Programming',
                complete: true,
            },
            {
                id: 2,
                text: 'CSE205',
                desc: 'OOP',
                complete: true,
            },
            {
                id: 3,
                text: 'SER222',
                desc: 'Data Structures and Algo',
                complete: true,
            }
        ])
    const addCourse = (course) => {
        //Added because no back end to create id
        const id = Math.floor(Math.random() *10000 + 1)
        const newCourse = { id, ...course }
        setCourse( [...courses, newCourse])
    }
    // Delete Task: Function created here at top of program, so it can be passed down
    // to components as a prop for use.
    const deleteCourse = (id) => {
        // Setting the task to filters tasks
        setCourse(courses.filter((course) => course.id !== id))
    }

    // Toggle Reminder
    const toggleCourse = (id) => {
        setCourse(courses.map((course) => course.id === id ? { ...course, complete: !course.complete } : course))
    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddCourse(!showAddCourse)} showAdd={showAddCourse}/>
            {showAddCourse && <AddCourse onAdd={addCourse}/>}
            {courses.length > 0 ? (
                <Courses courses={courses} onDelete={deleteCourse} onToggle={toggleCourse}/>
            ) : ('No courses to show')
            }
        </div>
    );
}

export default App;

