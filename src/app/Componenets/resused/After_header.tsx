import React from 'react'

const After_header = (props: any) => {
    return (
        <div>
            <div className='bg-violet-100 lg:h-[12vw] flex items-center vsm:py-3'>
                <div className='flex justify-center flex-col w-9/12 mx-auto'>
                    <div className='text-4xl font-bold lg:pb-0vsm:pb-1'>{props.text}</div>
                    {
                        props.text2 &&
                        <div className='flex'>
                            <div className='mr-3'>Home</div>
                            <div className='mr-3'>Pages</div>
                            <div className='mr-3 text-pink-500'>{props.text2}</div>
                        </div>
                    }
                </div>
            </div>
            {
                props.eccomerce &&
                <div className='w-9/12 mx-auto flex justify-between items-center lg:h-[10vw] lg:flex-row vsm:flex-col'>
                    <div className='flex flex-col vsm:my-3 lg:my-0'>
                        <div className='font-semibold text-blue-800 lg:text-xl vsm:text-[1.2rem]'>Eccomerce acceories & Fashion item</div>
                        <div className='text-sm text-gray-400'>About 9,620 results (0.62 seconds)</div>
                    </div>
                    <div className='flex mx-4 lg:flex-row vsm:flex-col vsm:justify-center lg:my-0 vsm:my-5 lg:text-sm'>
                        <div className='flex vsm:mx-auto vsm:my-1 lg:mx-0'>
                            <div>Per Page:</div>
                            <div><input type="text" className='border-2 w-20 mx-2 px-3' /></div>
                        </div>
                        <div className='flex lg:mx-4 vsm:mx-auto vsm:my-1 '>
                            <div>Sort By:</div>
                            <div><input type="text" className='border-2 w-32 mx-2 px-3' placeholder='Best Match' /></div>
                        </div>
                        <div className='flex lg:mx-4 items-center vsm:mx-auto vsm:my-1 '>
                            <div>View:</div>
                            <div className='flex items-center'>
                                <div className='mx-1'>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66683 1.33337H2.00016C1.63197 1.33337 1.3335 1.63185 1.3335 2.00004V4.66671C1.3335 5.0349 1.63197 5.33337 2.00016 5.33337H4.66683C5.03502 5.33337 5.3335 5.0349 5.3335 4.66671V2.00004C5.3335 1.63185 5.03502 1.33337 4.66683 1.33337Z" fill="#151875" />
                                        <path d="M9.99984 1.33337H7.33317C6.96498 1.33337 6.6665 1.63185 6.6665 2.00004V4.66671C6.6665 5.0349 6.96498 5.33337 7.33317 5.33337H9.99984C10.368 5.33337 10.6665 5.0349 10.6665 4.66671V2.00004C10.6665 1.63185 10.368 1.33337 9.99984 1.33337Z" fill="#151875" />
                                        <path d="M4.66683 6.66663H2.00016C1.63197 6.66663 1.3335 6.9651 1.3335 7.33329V9.99996C1.3335 10.3681 1.63197 10.6666 2.00016 10.6666H4.66683C5.03502 10.6666 5.3335 10.3681 5.3335 9.99996V7.33329C5.3335 6.9651 5.03502 6.66663 4.66683 6.66663Z" fill="#151875" />
                                        <path d="M9.99984 6.66663H7.33317C6.96498 6.66663 6.6665 6.9651 6.6665 7.33329V9.99996C6.6665 10.3681 6.96498 10.6666 7.33317 10.6666H9.99984C10.368 10.6666 10.6665 10.3681 10.6665 9.99996V7.33329C10.6665 6.9651 10.368 6.66663 9.99984 6.66663Z" fill="#151875" />
                                    </svg>

                                </div>
                                <div className='mx-1'>
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.875 7.625H0.375C0.275544 7.625 0.180161 7.66451 0.109835 7.73483C0.0395088 7.80516 0 7.90054 0 8L0 9.5C0 9.59946 0.0395088 9.69484 0.109835 9.76517C0.180161 9.83549 0.275544 9.875 0.375 9.875H1.875C1.97446 9.875 2.06984 9.83549 2.14016 9.76517C2.21049 9.69484 2.25 9.59946 2.25 9.5V8C2.25 7.90054 2.21049 7.80516 2.14016 7.73483C2.06984 7.66451 1.97446 7.625 1.875 7.625ZM1.875 0.125H0.375C0.275544 0.125 0.180161 0.164509 0.109835 0.234835C0.0395088 0.305161 0 0.400544 0 0.5L0 2C0 2.09946 0.0395088 2.19484 0.109835 2.26516C0.180161 2.33549 0.275544 2.375 0.375 2.375H1.875C1.97446 2.375 2.06984 2.33549 2.14016 2.26516C2.21049 2.19484 2.25 2.09946 2.25 2V0.5C2.25 0.400544 2.21049 0.305161 2.14016 0.234835C2.06984 0.164509 1.97446 0.125 1.875 0.125ZM1.875 3.875H0.375C0.275544 3.875 0.180161 3.91451 0.109835 3.98484C0.0395088 4.05516 0 4.15054 0 4.25L0 5.75C0 5.84946 0.0395088 5.94484 0.109835 6.01517C0.180161 6.08549 0.275544 6.125 0.375 6.125H1.875C1.97446 6.125 2.06984 6.08549 2.14016 6.01517C2.21049 5.94484 2.25 5.84946 2.25 5.75V4.25C2.25 4.15054 2.21049 4.05516 2.14016 3.98484C2.06984 3.91451 1.97446 3.875 1.875 3.875ZM11.625 8H4.125C4.02554 8 3.93016 8.03951 3.85984 8.10983C3.78951 8.18016 3.75 8.27554 3.75 8.375V9.125C3.75 9.22446 3.78951 9.31984 3.85984 9.39017C3.93016 9.46049 4.02554 9.5 4.125 9.5H11.625C11.7245 9.5 11.8198 9.46049 11.8902 9.39017C11.9605 9.31984 12 9.22446 12 9.125V8.375C12 8.27554 11.9605 8.18016 11.8902 8.10983C11.8198 8.03951 11.7245 8 11.625 8ZM11.625 0.5H4.125C4.02554 0.5 3.93016 0.539509 3.85984 0.609835C3.78951 0.680161 3.75 0.775544 3.75 0.875V1.625C3.75 1.72446 3.78951 1.81984 3.85984 1.89016C3.93016 1.96049 4.02554 2 4.125 2H11.625C11.7245 2 11.8198 1.96049 11.8902 1.89016C11.9605 1.81984 12 1.72446 12 1.625V0.875C12 0.775544 11.9605 0.680161 11.8902 0.609835C11.8198 0.539509 11.7245 0.5 11.625 0.5ZM11.625 4.25H4.125C4.02554 4.25 3.93016 4.28951 3.85984 4.35984C3.78951 4.43016 3.75 4.52554 3.75 4.625V5.375C3.75 5.47446 3.78951 5.56984 3.85984 5.64017C3.93016 5.71049 4.02554 5.75 4.125 5.75H11.625C11.7245 5.75 11.8198 5.71049 11.8902 5.64017C11.9605 5.56984 12 5.47446 12 5.375V4.625C12 4.52554 11.9605 4.43016 11.8902 4.35984C11.8198 4.28951 11.7245 4.25 11.625 4.25Z" fill="#151875" />
                                    </svg>

                                </div>
                            </div>
                            <div><input type="text" className='border-2 w-40 mx-2 px-3' /></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default After_header