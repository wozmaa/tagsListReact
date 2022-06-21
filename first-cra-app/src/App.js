import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [addList, setAddList] = useState(["lorem", "ipsum", "lol"]);
  const [classChange, setClassChange] = useState("is-not-error");
  const [errorText, setErrorText] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [inputButton, setInputButton] = useState("inputBtnNotActive");

  const handleChange = (e) => {
    setText(e.target.value);
    setClassChange("is-not-error");
    setErrorText("");
    setButtonActive(false);
    setInputButton("inputBtnActive");
  };

  const handleClick = (e) => {
    if(text !== '')
    setAddList([...addList, text]);
    setText("");
    setButtonActive(false);
    setInputButton("inputBtnNotActive");
  };

  const handleRemove = (id) => {
    setAddList(addList.filter((item, index) => id !== index));
  };

  const blurChange = () => {
    if (text === "") {
      setClassChange("is-error");
      setErrorText("Поле для ввода не может быть пустым");
      setButtonActive(true);
      inputButton("inputBtnNotActive");
      setInputButton("inputBtnNotActive");
    } else {
      setInputButton("inputBtnActive");
      setClassChange("is-not-error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          onBlur={blurChange}
          className={classChange}
        />
        <button
          onClick={handleClick}
          className={inputButton}
          disabled={buttonActive}
        >
          Отправить
        </button>
      </form>
      <div className="errorText">{errorText}</div>
      <div className="addLists">
        {addList.map((text, id) => {
          return (
            <div className="addList">
              {text}
              <button
                type="button"
                className="btn"
                onClick={() => handleRemove(id)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
