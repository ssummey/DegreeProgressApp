import Header from './components/Header'
import Courses from './components/Courses'
import { useState, useEffect } from 'react'
import AddCourse from './components/AddCourse'

function App() {
    // ShowADDCourse is the hook for the add course button
    const [showAddCourse, setShowAddCourse] = useState(false)
    const [courses, setCourses] = useState(
        [])

    useEffect(() => {
        const getCourses = async () => {
            const coursesFromServer = await fetchCourses()
            setCourses(coursesFromServer)
        }

        getCourses()
    }, [])

    // Fetch Courses
    const fetchCourses = async () => {
        const res = await fetch('http://localhost:5000/courses')
        const data = await  res.json()

        return data
    }
    // Fetch Course
    const fetchCourse = async (id) => {
        const res = await fetch(`http://localhost:5000/courses/${id}`)
        const data = await res.json()

        return data
    }

    // Add Course
    const addCourse = async (course) => {
        const res = await fetch('http://localhost:5000/courses', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(course),
        })

        const data = await res.json()

        setCourses([...courses, data])
    }

    // Delete Task: Function created here at top of program, so it can be passed down
    // to components as a prop for use.
    const deleteCourse = async (id) => {
        await fetch(`http://localhost:5000/courses/${id}`,  {method: 'DELETE',})
        setCourses(courses.filter((course) => course.id !== id))
    }

    // Not implemented yet
    // Toggle Reminder
    // const toggleCourseVisible = async (id) => {
    //     const courseToToggle = await fetchCourse(id)
    //     const updateCourse = { ...courseToToggle, visible: !courseToToggle.visible }
    //
    //     const res = await fetch(`http://localhost:5000/courses/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //         body: JSON.stringify(updateCourse),
    //     })
    //
    //     const data = await res.json()
    //
    //     setCourses(
    //         courses.map((course) =>
    //             course.id === id ? { ...course, visible: data.visible } : course
    //         )
    //     )
    // }

    // Toggle Complete. Has the course been completed
    const toggleCourseComplete = async (id) => {
        const courseToToggle = await fetchCourse(id)
        const updateCourse = { ...courseToToggle, complete: !courseToToggle.complete }

        const res = await fetch(`http://localhost:5000/courses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateCourse),
        })

        const data = await res.json()

        setCourses(
            courses.map((course) =>
                course.id === id ? { ...course, complete: data.complete } : course
            )
        )
    }

    // Edit Course
    const editCourse = async (id) => {
        const courseToToggle = await fetchCourse(id)
        const updateCourse = { ...courseToToggle, complete: !courseToToggle.complete }

        const res = await fetch(`http://localhost:5000/courses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updateCourse),
        })

        const data = await res.json()
        setCourses([...courses, data])
    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddCourse(!showAddCourse)} showAdd={showAddCourse}/>
            {showAddCourse && <AddCourse onAdd={addCourse}/>}
            {courses.length > 0 ? (
                <Courses courses={courses} onDelete={deleteCourse}
                         onToggle={toggleCourseComplete} onEdit={editCourse}/>
            ) : ('No courses to show')
            }
        </div>
    );
}

export default App;

