import React from 'react'

const DifficultyBar = () => {
    return (
        <div className="max-w-xl mx-4 my-2">
        <p className="pb-2 px-2 font-bold">Beginner</p>	
        <div className="flex pb-3">
            <div className="flex-1 z-10">
                <div className="w-6 h-6 bg-secondary mx-0 rounded-full border-2 border-secondary">
                </div>
            </div>
    
    
            <div className="w-full align-center items-center align-middle content-center flex">
            <div className="w-full items-center align-middle align-center flex-1">
                    <div className="bg-white border-2 -ml-2 rounded-full border-secondary py-xs w-full"></div>
                </div>
            </div>
        
            
            <div className="flex-1 z-10">
                <div className="w-6 h-6 bg-white -ml-4 rounded-full border-2 border-secondary">
                </div>
            </div>
        
            <div className="w-full align-center items-center align-middle content-center flex">
            <div className="w-full items-center align-middle align-center flex-1">
                     <div className="bg-white border-2 -ml-2 rounded-full border-secondary py-xs w-full"></div>
                </div>
            </div>
        
            <div className="flex-1 z-10">
                <div className="w-6 h-6 bg-white -ml-4 rounded-full border-2 border-secondary">
                </div>
            </div>
        
        
            <div className="w-full align-center items-center align-middle content-center flex">
                <div className="w-full items-center align-middle align-center flex-1">
                     <div className="bg-white border-2 -ml-2 rounded-full border-secondary py-xs w-full"></div>
                </div>
            </div>
    
    
            <div className="flex-1 z-10">
                <div className="w-6 h-6 bg-white border-2 border-secondary -ml-4 rounded-full">
                </div>
            </div>	
        </div>
    </div>
    )
}

export default DifficultyBar
