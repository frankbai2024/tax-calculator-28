import { useState } from 'react';
import "./App.css";

import Header from './app/Header';
import FinancialYearSelect from './app/FinancialYearSelect';
import TaxRateTableForFinancialYear from './app/TaxRateTableForFinancialYear';
import Calculator from './app/Calculator';
import Disclaimer from './app/Disclaimer';

//https://github.com/JR-x-Melfish-P3/tax-calculator

function App() {
  //state lift，让以下两个子组件可以共享之
  const [financialYear, setFinancialYear] = useState("FY23-24");

  return (
    <div className='page'>
      <div className='page-content'>
        <Header />
        <FinancialYearSelect
          financialYear={financialYear}

          //反向数据流，把值传回给父组件
          onFinancialYearClick={(value) => setFinancialYear(value)}//这两句等价，但这句扩展性更好
        //onFinancialYearClick={setFinancialYear}
        />
        <div className='main-grid'>
          <TaxRateTableForFinancialYear financialYear={financialYear} />
          <Calculator financialYear={financialYear} />
        </div>
        <Disclaimer />
      </div>
    </div>
  )
}

export default App
