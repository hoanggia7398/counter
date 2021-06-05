import React, { useState } from 'react'
import CountDownComponent from './CountDownComponent'
import CountUpComponent from './CountUpComponent'
import moment from 'moment'
const CounterComponent = () => {
   const [startCountUp, setStartCountUp] = useState(false)
   const [startCountDown, setStartCountDown] = useState(false)
   const [startMoment, setStartMoment] = useState()
    return (
        <div className="w-2/3 h-2/3 bg-black rounded-lg py-8">
            <div className="flex flex-col gap-8">
               <CountDownComponent start={startCountDown} setStart={setStartCountDown}/>
               <CountUpComponent start={startCountUp} setStart={setStartCountUp} moment={startMoment}/>
            </div>
            <button 
            className="focus:outline-none bg-red-500 rounded-lg py-1 px-4 mt-4 font-bold"

                onClick={() => {
                    setStartCountUp(true)
                    setStartCountDown(true)
                    setStartMoment(moment())
                }}
            >START</button>
        </div>
    )
}

export default CounterComponent
