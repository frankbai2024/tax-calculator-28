import { useState } from "react";
import "./Calculator.css";
import Form from "./components/Form"
import Card from "../../components/Card"
import Result from "./components/Result"

const Calculator = ({ financialYear }) => {
  const [income, setIncome] = useState();
  return (
    <Card>
      <h2 className="calculator-title">Calculate Tax</h2>
      {/* Form只需要知道setIncome */}
      <Form onSubmit={(value) => setIncome(value)} />
      <Result financialYear={financialYear} income={income} />
    </Card>
  )
};

export default Calculator;