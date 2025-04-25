import { useState } from 'react';
import { quizQuestions } from './data/quizData';
import Question from './components/Question';
import Options from './components/Options';
import Progress from './components/Progress';
import ScoreSummary from './components/ScoreSummary';
import RestartButton from './components/RestartButton';
import './index.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSelect = (option) => setSelected(option);

  const handleNext = () => {
    const isCorrect = selected === quizQuestions[current].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect!");
    }

    setTimeout(() => {
      setFeedback("");
      setSelected(null);

      if (current + 1 < quizQuestions.length) {
        setCurrent(current + 1);
      } else {
        setCompleted(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFeedback("");
    setCompleted(false);
  };

  return (
    <div className="app">
      <h1>QUIZ APP</h1>
      {completed ? (
        <>
          <ScoreSummary score={score} total={quizQuestions.length} />
          <RestartButton onRestart={handleRestart} />
        </>
      ) : (
        <div className="quiz">
          <Progress current={current + 1} total={quizQuestions.length} />
          <Question text={quizQuestions[current].question} />
          <Options
            options={quizQuestions[current].options}
            selected={selected}
            onSelect={handleSelect}
          />
          {selected && <button onClick={handleNext}>Next</button>}
          <p className="feedback">{feedback}</p>
        </div>
      )}
    </div>
  );
}

export default App;
