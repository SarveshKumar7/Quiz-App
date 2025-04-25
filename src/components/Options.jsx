const Options = ({ options, selected, onSelect }) => (
    <ul className="options">
      {options.map((option, i) => (
        <li key={i}>
          <button
            className={selected === option ? "selected" : ""}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
  export default Options;
  