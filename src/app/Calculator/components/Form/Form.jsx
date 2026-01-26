import "./Form.css";
import Button from "../../../../components/Button";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value);
      }
      }
      className="calculator-form">
      <div className="calculator-field">
        <label className="calculator-label">Annual taxable Income</label>
        <div className="calculator-input-wrap">
          <span className="calculator-currency">$</span>
          <input
            className="calculator-input"
            type="number"
            placeholder="Enter your Income"
            min="0"
            step="0.01"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
      </div>

      <Button color="success">Calculate Tax</Button>
    </form>
  )
}
export default Form