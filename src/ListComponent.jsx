import React, { useEffect, useState } from 'react'
import TaskComponent from './TaskComponent'

function ListComponent({ search,filter, darkMode, taskList, deleteTask, editTask }) {
    const [filteredList, setFilteredList] = useState([])

    // console.log(pattern.test(search))
    useEffect(() => {
        const pattern=new RegExp(search,"i")
        setFilteredList(
            taskList.map((item, id) => {
                if (
                    ((filter === 'All')&&pattern.test(item.text)) ||
                    (filter === 'Complete' && item.finished && pattern.test(item.text)) ||
                    (filter === 'Incomplete' && !item.finished && pattern.test(item.text))
                ) {
                    return item
                } else {
                    return null
                }
            })
        )
    }, [filter, search, taskList])

    // console.log(filteredList)
    return (
        <div className="mt-3 flex flex-col items-center">
            {filteredList.map((item, id) => {
                if (item !== null) {
                    return (
                        <TaskComponent
                            darkMode={darkMode}
                            deleteTask={deleteTask}
                            editTask={editTask}
                            finished={item.finished}
                            text={item.text}
                            key={id}
                            id={id}
                        />
                    )
                }
                return ""
            })}
            {filteredList.every(item => item === null) && (
                <>
                    <img src="empty.svg" className="mt-7 mb-5" width={221} alt="Empty" />
                    <p className="text-xl">Empty...</p>
                </>
            )}

        </div>
    )
}

export default ListComponent
