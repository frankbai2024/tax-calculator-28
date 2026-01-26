import "./FinancialYearSelect.css";
import Card from "../../components/Card"
import Button from "../../components/Button"
import { useState } from "react";
//反向数据流
const FinancialYearSelect = ({ financialYear, onFinancialYearClick }) => {
  //将 state 提升到可以给多个组件复用的最小父组件里
  //const [financialYear, setFinancialYear] = useState();
  return (
    <div className="financial-year-container">
      <Card>
        <p className="financial-year-label">Select Financial Year</p>
        <div className="financial-year-buttons">
          <Button
            onClick={() => {
              onFinancialYearClick("FY23-24");
            }}
            color={financialYear === "FY23-24" ? "primary" : "mute"}
          >
            FY 2023-24
          </Button>
          <Button
            onClick={() => {
              onFinancialYearClick("FY24-25");
            }}
            color={financialYear === "FY24-25" ? "primary" : "mute"}
          >
            FY 2024-25
          </Button>
        </div>
      </Card>
    </div>

  )
}

  ;

export default FinancialYearSelect;