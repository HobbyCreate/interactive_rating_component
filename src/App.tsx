import { useState } from 'react'
import Star from './assets/images/icon-star.svg'
import './App.css'
import ThanksPage from './component/ThanksPage';

function App() {
  const [selectedScore, setSelectedScore] = useState(0);
  const [submit, setSubmit] = useState(false);
  const scores = [1, 2, 3, 4, 5]

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedScore(Number(event.currentTarget.value));
  };

  const onSubmitHandler = () => {
    setSubmit(!submit);
  }

  return (
    <>
      {
        submit == false ?
          (<div className='rating-container'>
            <img src={Star} alt='icon' />
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='scores'>
              {
                scores.map((score): any => {
                  return (
                    <button className={selectedScore === score ? 'score-selected' : 'score'}
                      onClick={buttonHandler}
                      value={score}
                      key={score}>{score}</button>
                  )
                })
              }
            </div>
            <button className='submit-btn' type="submit" onClick={onSubmitHandler}>Submit</button>
          </div>)
          :
          <ThanksPage score={selectedScore}/>
      }
    </>

  )
}

export default App
