import React, { useState } from 'react'
import data from './data'
import Question from './Question'

function App() {
  const [question, setQuestion] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>question and answers about login</h3>
        <section className='info'>
          {question.map((item) => {
            return <Question key={item.id} {...item} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
