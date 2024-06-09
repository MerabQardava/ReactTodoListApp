import React, { useState } from 'react'

function SearchComponent({setSearch,filter,changeFilter, darkMode, toggleDarkMode }) {
    const [menu, setMenu] = useState(false)


    const toggleMenu = () => {
        setMenu((state) => !state)
    }

    function inputOnchangeHandler(e){
        setSearch(e.target.value)
    }    

    return (
        <div className={'mt-4 w-[100vw] max-w-[750px]'}>
            <div className={'flex items-center justify-between gap-4'}>
                <div className={'relative w-full'}>
                    <input
                        onChange={inputOnchangeHandler}
                        className={`h-[38px] w-[100%] rounded-[5px] border-[2px] ${darkMode ? 'bg-[#252525] border-white text-white' : 'bg-white text-lightTheme border-lightTheme'}  px-4 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-[#c4c1ff]`}
                        type="text"
                    />
                    <img
                        src="searchIcon.svg"
                        alt="searc"
                        className={
                            'absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
                        }
                    />
                    <object
                        type="image/svg+xml"
                        data={`${darkMode ? 'searchIconDark.svg' : 'searchIcon.svg'}`}
                        className={`absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform`}
                    />
                </div>
                <div className={'relative'}>
                    <div
                        className={
                            'm-0 flex h-[38px] min-w-[93px] shrink-0 cursor-pointer items-center justify-between rounded bg-lightTheme px-[10px] text-white hover:bg-hover'
                        }
                        onClick={toggleMenu}
                    >
                        <p className="text-[18px]  font-medium">{filter}</p>
                        <img
                            alt={'arrow'}
                            className={`${menu ? 'rotate-180' : 'rotate-0'} mx-2`}
                            src="arrow.svg"
                        />
                    </div>

                    <div
                        className={`absolute w-full overflow-hidden rounded-[5px] border-[2px] border-lightTheme bg-white text-lightTheme ${menu ? '' : 'hidden'}`}
                    >
                        <div onClick={()=>{
                            changeFilter("All")
                        }}
                            className={
                                'box-border cursor-pointer px-[6px] pt-[8px] hover:bg-[#dbd9f9]'
                            }
                        >
                            <p>All</p>
                        </div>
                        <div
                            onClick={()=>{
                                changeFilter("Complete")
                            }}
                            className={
                                'box-border cursor-pointer px-[6px] hover:bg-[#dbd9f9]'
                            }
                        >
                            <p>Complete</p>
                        </div>
                        <div
                            onClick={()=>{
                                changeFilter("Incomplete")
                            }}
                            className={
                                'box-border cursor-pointer px-[6px] pb-[8px] hover:bg-[#dbd9f9]'
                            }
                        >
                            <p>Incomplete</p>
                        </div>
                    </div>
                </div>
                <div
                    onClick={toggleDarkMode}
                    className={
                        'relative m-0 h-[38px] w-[38px] shrink-0 rounded bg-lightTheme hover:bg-hover'
                    }
                >
                    <img
                        src={`${darkMode ? 'sun.svg' : 'moon.svg'}`}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer"
                        alt="dark mode button"
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchComponent
