import { useState } from 'react';
import './App.css'
import usePasswordGenerator from './hooks/use-password-generator';
import PasswordStrengthIndicator from './components/StrengthChecker';
import Button from './components/Button';
import Checkbox from './components/CheckBox';

function App() {
  const [length, setLength] = useState(4)
  const [copied, setCopied] = useState(false);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckBoxData = [...checkboxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state
    setCheckboxData(updatedCheckBoxData);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000)
  }

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <>
      <div className="container">
        {/* passowrd text and copy button */}
        {password && <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copied ? "Copied" : "copy"}
            onClick={handleCopy}
            customClass="copyBtn"
          />        </div>}
        {/* character length */}
        <div className="charLength">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        {/* checkboxes */}
        <div className="checkboxes">
          {
            checkboxData.map((checkbox, index) => (
              <Checkbox
                key={index}
                title={checkbox.title}
                onChange={() => handleCheckboxChange(index)}
                state={checkbox.state}
              />
            ))
          }
        </div>
        {/* strength */}
        <PasswordStrengthIndicator password={password} />
        {/* error Handling */}
        {
          errorMessage && <div className='errorMessage'>{errorMessage}</div>
        }
        {/* Generate button */}
        <Button
          text="Generate Password"
          onClick={() => generatePassword(checkboxData, length)}
          customClass="generateBtn"
        />
      </div>
    </>
  )
}

export default App
