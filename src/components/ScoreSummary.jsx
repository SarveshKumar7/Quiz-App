const ScoreSummary = ({ score, total }) => (
    <div className="score">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
    </div>
  );
  export default ScoreSummary;
  