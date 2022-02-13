import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

export default function Convert({ currency }) {
  const [inputValue, setInputValue] = useState(0);
  const [cur1, setCur1] = useState(0);
  const [cur2, setCur2] = useState(0);
  const [result, setResult] = useState(0);
  const cur = currency.Valute;

  function calc() {
    const a = cur1 * inputValue;
    const res = a / cur2;
    setResult(res);
  }

  return (
    <>
      {Object.keys(currency).length && (
        <Container>
          <h1 className="mt-3">Convert Page</h1>
          <div className="d-flex justify-content-between">
            <div>
              <div className="mt-3">
                <label>Выберите валюту</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ maxWidth: 300 }}
                  onChange={(e) => setCur1(e.target.value)}
                >
                  <option value="AUD/UZS/CAD">AUD/UZS/CAD</option>
                  <option value={cur.AUD.Value}>AUD</option>
                  <option value={cur.UZS.Value}>UZS</option>
                  <option value={cur.CAD.Value}>CAD</option>
                </select>
              </div>
              <div className="mt-3 d-flex flex-column">
                <label className="me-5">Введите количество</label>
                <input
                  style={{ maxWidth: 300 }}
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></input>
              </div>
              <div className="mt-3 ">
                <label>Выберите вторую валюту</label>
                <select
                  style={{ maxWidth: 300 }}
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setCur2(e.target.value)}
                >
                  <option value="AUD/UZS/CAD">AUD/UZS/CAD</option>
                  <option value={cur.AUD.Value}>AUD</option>
                  <option value={cur.UZS.Value}>UZS</option>
                  <option value={cur.CAD.Value}>CAD</option>
                </select>
              </div>

              <Button
                variant="primary"
                type="submit"
                className="mt-3"
                onClick={() => calc()}
              >
                Convert it !
              </Button>

              <div className="h3 mt-3">Ваш результат: {Math.round(result)}</div>
            </div>
            <div>
              <h1>Я не использовал Redux/Effector</h1>
              <h2>Могу рассказать подробнее на тех собесодовании</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
