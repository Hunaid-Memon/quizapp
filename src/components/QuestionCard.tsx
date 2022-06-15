import React, { useState } from 'react';
import { questionPropsType } from '../types/Quiz_types'



const QuestionCard:React.FC<questionPropsType> = ({ question, options, callback }) => {
    
    const [selectedAns, setSelectedAns] = useState('')

    const handleSubmit = (e: any) => {
        setSelectedAns(e?.target.value)
    }

    return (
        <div >
            <div>{question}</div>
            <form onSubmit={(e:React.FormEvent<EventTarget>) => callback(e, selectedAns) } >
                {
                    options.map((opt:string, ind:number) => {
                       return <div key={ind}>
                           <label>
                               <input 
                                    type='radio'
                                    name='opt'
                                    value={opt}
                                    required
                                    checked={selectedAns === opt}
                                    onChange={handleSubmit}
                               />
                               {opt}
                           </label>
                        </div>
                    })
                }
                <input type="submit" />
            </form>
        </div>
    )
}

export default QuestionCard;