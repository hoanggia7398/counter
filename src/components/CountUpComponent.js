import React, { useState, useRef, useEffect } from 'react'
import moment from "moment"

const CountUpComponent = (props) => {
    const [countDownTime, setCountDownTime] = useState('')
    const [result, setResult] = useState({ h: 0, m: 0, s: 0 })
    const [isStart, setIsStart] = useState(false)
    
    const countDownTimeRef = useRef()
    
    const countUp = () => {
        const startDate = moment(new Date().toISOString())
        const timeEnd = moment(countDownTime)

        const diffDate = timeEnd.diff(startDate);

        const diff = moment().diff(props.moment);
        if( diffDate < 0 ) {
            props.setStart(false)
            return
        }

        const diffDuration = moment.duration(diff);
        
        const hour = Math.floor(diffDuration.asHours())
        const min = diffDuration.minutes()
        const second = diffDuration.seconds()
        if(diffDate > 0) setResult({ h: hour, m: min, s: second }) 
        
    }

    const onChangeDatePicker = () => {
        setCountDownTime(countDownTimeRef.current.value)
        props.setStart(false)
    }
    
    useEffect(() => {
        setIsStart(props.start)
        let interval = setInterval(() => {
            if(isStart && countDownTime) countUp()
        }, 1000)
        return () => clearInterval(interval)
    }, [isStart, result, props.start])
    return (
        <div>
            <span className="text-4xl font-semibold">CountUp</span>
            <div>
                <input
                    ref={countDownTimeRef}
                    onChange={() => onChangeDatePicker()}
                    className="style-input focus:outline-none text-4xl font-semibold" type="datetime-local" step="1"
                    max="2100-06-14T00:00"
                />
            </div>
            <span className="text-7xl font-bold" >{`${result.h ? result.h : "00"} : ${result.m ? result.m : "00"} : ${result.s ? result.s : "00"}`}</span>
           
        </div>
    )
}

export default CountUpComponent
