import React, { useState } from 'react'
import { createPortal } from 'react-dom'

function AddTaskModal({editFunc=null,task=false, toggleModal, darkMode,addTask,children }) {
    const [inputText, setInputText] = useState(task?task.info.text:"")

    const inputOnChangeListener=(e)=>{
        setInputText(e.target.value)
    }

    const applyOnclickListener=()=>{
        if(!task){
            addTask({text:inputText,finished:false})
            toggleModal()
        }else{
            editFunc(task.id,{text:inputText,finished:task.info.finished})
            toggleModal()
        }
    }

    return createPortal(
        <>
            <div
                onClick={toggleModal}
                className={`fixed top-0 z-10 h-[100%] w-full bg-black opacity-70`}
            ></div>
            <div
                className={`fixed left-1/2 top-[118px] z-20 h-[289px] w-full max-w-[500px] rounded-[16px] border-[1px] border-white px-[30px] py-[18px] ${darkMode ? 'bg-darkTheme' : 'bg-white'} -translate-x-1/2 transform`}
            >
                <h2
                    className={`${darkMode ? 'text-white' : 'text-black'} text-center text-2xl font-medium`}
                >
                    {children}
                </h2>
                <input
                    value={inputText}
                    onChange={inputOnChangeListener}
                    placeholder={'Input your note...'}
                    className={`mt-[25px] h-[38px] w-[100%] rounded-[5px] border-[1px] ${darkMode ? 'bg-darkTheme border-white text-white' : 'border-lightTheme bg-white text-lightTheme'} px-4 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-[#c4c1ff]`}
                    type="text"
                />
                <div className={`mt-[119px] flex w-full justify-between`}>
                    <div
                        onClick={toggleModal}
                        className={`flex h-[38px] w-full max-w-[110px] cursor-pointer items-center justify-center rounded-[5px] border-[1px] transition duration-300 ease-in-out ${darkMode ? 'bg-darkTheme' : 'bg-white'} border-lightTheme text-lightTheme hover:border-hover hover:text-hover`}
                    >
                        <p>Cancel</p>
                    </div>
                    <div
                        onClick={applyOnclickListener}
                        className={`flex h-[38px] w-full max-w-[110px] cursor-pointer items-center justify-center rounded-[5px] border-[1px] transition duration-300 ease-in-out hover:bg-hover ${darkMode ? 'text-white' : 'border-lightTheme'} border-lightTheme bg-lightTheme text-white`}
                    >
                        <p>Apply</p>
                    </div>
                </div>
            </div>
        </>,document.getElementById("root")
    )
}

export default AddTaskModal
