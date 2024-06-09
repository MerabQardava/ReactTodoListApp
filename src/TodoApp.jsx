import React, { useEffect, useState } from 'react'
import SearchComponent from './SearchComponent'
import ListComponent from './ListComponent'
import AddTaskModal from './addTaskModal'

function TodoApp(props) {
    const [darkMode, setDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkMode')
        return savedDarkMode !== null ? JSON.parse(savedDarkMode) : false
    })
    const [tasks, setTasks] = useState(() => {
        let arr = localStorage.getItem('tasks')
        console.log(arr)
        if (arr) {
            return JSON.parse(arr)
        } else {
            return []
        }
    })
    const [modalOpen, setModalOpen] = useState(false)
    const [filter, setFilter] = useState('All')
    const [search, setSearch] = useState('')

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const changeFilter = (arg) => {
        setFilter(arg)
    }

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode])

    const toggleModal = () => {
        setModalOpen((prev) => !prev)
    }
    const addTask = (task) => {
        setTasks((arr) => [...arr, task])
    }
    const deleteTask = (index) => {
        setTasks((arr) => arr.filter((_, i) => i !== index))
    }
    const editTask = (index, newTask) => {
        setTasks((arr) => arr.map((task, i) => (i === index ? newTask : task)))
    }

    const toggleDarkMode = () => {
        setDarkMode((state) => !state)
    }

    if (darkMode) {
        document.body.style.backgroundColor = '#252525'
    } else {
        document.body.style.backgroundColor = '#ffffff'
    }

    return (
        <div className={`h-full`}>
            {modalOpen && (
                <AddTaskModal
                    toggleModal={toggleModal}
                    darkMode={darkMode}
                    addTask={addTask}
                >
                    New Note
                </AddTaskModal>
            )}
            <div
                className={`max-w-[750px] ${darkMode ? 'text-white' : 'text-black'} relative`}
            >
                <h1
                    className={`mt-10 text-center font-kanit text-[26px] font-medium`}
                >
                    TODO LIST
                </h1>
                <SearchComponent
                    setSearch={setSearch}
                    filter={filter}
                    changeFilter={changeFilter}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                />
                <ListComponent
                    search={search}
                    filter={filter}
                    darkMode={darkMode}
                    taskList={tasks}
                    deleteTask={deleteTask}
                    editTask={editTask}
                />
                <div
                    onClick={toggleModal}
                    className={`absolute right-[0] top-[85vh] flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-[2px] border-lightTheme bg-lightTheme hover:bg-hover`}
                >
                    <img src="plus.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default TodoApp
