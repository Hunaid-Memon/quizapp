import React, { useState } from 'react';
import { questionPropsType } from '../types/Quiz_types'



const QuestionCard:React.FC<questionPropsType> = ({ question, options, callback }) => {
    
    const [selectedAns, setSelectedAns] = useState('')

    const handleSubmit = (e: any) => {
        setSelectedAns(e?.target.value)
    }

    return (
        <div className='question-container' >
            <div className='question' >
               <h4>{question}
                </h4> 
            </div>
            <form className='question-form' onSubmit={(e:React.FormEvent<EventTarget>) => callback(e, selectedAns) } >
                {
                    options.map((opt:string, ind:number) => {
                       return <div key={ind} className='answer' >
                           <label>
                               <input 
                                    type='radio'
                                    name='opt'
                                    value={opt}
                                    required
                                    className='input'
                                    checked={selectedAns === opt}
                                    onChange={handleSubmit}
                               />
                               {opt}
                           </label>
                        </div>
                    })
                }
                <input className='submit' type="submit" />
            </form>
        </div>
    )
}

export default QuestionCard;