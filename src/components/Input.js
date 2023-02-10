import React from "react";

export default function Input(props) {
  const [inputValue, setInputValue] = React.useState("");

  const [cssClass, setCssClass] = React.useState('');

  function handleBlur() {
    console.log("Input has lost focus");
    checkAnswer()
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function checkAnswer() {
    const isAnswerTrue = inputValue === props.answer
    setCssClass(isAnswerTrue ? 'input-right' : 'input-wrong')
  }

  return (
    <input
      type="text"
      className={`input ${cssClass}`}
      value={inputValue}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
}
