import DataEntryField from './Components/DataEntryField';
import './App.css';
import Container from 'react-bootstrap/Container'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useState, useEffect } from "react";
import { DisplayField } from './Components/DisplayField';
import { VATField } from './Components/VatField';
import { Col, Row } from 'react-bootstrap';

function App() {
  const [excValue, setExcValue] = useState(0);
  const [incValue, setIncValue] = useState(0);
  const [vatAmount, setVatAmount] = useState(0);
  const [vatRate, updateVATRate] = useState(20.0);

  const addVat = (price) => {
    const LocalPrice = price * ((vatRate/100.)+1);
    setExcValue(price);
    setIncValue(LocalPrice);
    updateVatAmount(LocalPrice, price);
    console.log("Adding VAT")
  }

  const removeVat = (price) => {
    const LocalPrice = price / ((vatRate/100.)+1);
    setExcValue(LocalPrice);
    setIncValue(price);
    updateVatAmount(price, LocalPrice);
    console.log("Removing VAT")
  }

  const updateVatAmount = (including, excluding) => {
    const vatAmountLocal = including - excluding;
    setVatAmount(vatAmountLocal);
  }

  useEffect(()=>{
    addVat(excValue);
  }, [vatRate])

  return (
    <Container className="p-3 bg-dark">
      <Container className="p-5 mb-4 bg-light rounded-5">
        <Header/>
        <Row>
          <VATField vatRateChanged={updateVATRate} currentVATRate={vatRate}/>
        </Row>
        <Row>
          <DataEntryField
            label='Price excluding VAT' handleValueChanged={addVat}
            value={excValue === 0 ? "": excValue} 
          />
        </Row>
        <Row>
          <DisplayField label="VAT to Pay: " value={vatAmount}/>
        </Row>
        <Row>
          <DataEntryField
            label='Price including VAT' handleValueChanged={removeVat}
            value={incValue === 0 ? "": incValue}
          />
        </Row>
        <Footer incValue={incValue} />
      </Container>
    </Container>
    );
}

export default App;
