import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

export default function Current({ currency }) {
  const cur = currency.Valute;
  const [cur1, setCur1] = useState('AUD');

  window.setTimeout(function () {
    window.location.reload();
  }, 15000);

  return (
    <div>
      {Object.keys(currency).length && (
        <Container>
          <h1 className="mt-3">Currency Page</h1>
          <div className="mt-3">
            <label>Выберите базовую валюту</label>
            <select
              className="form-select"
              aria-label="Default select example"
              style={{ maxWidth: 300 }}
              onChange={(e) => setCur1(e.target.value)}
            >
              <option value="AUD/UZS/CAD">AUD/UZS/CAD</option>
              <option value={cur.AUD.CharCode}>AUD</option>
              <option value={cur.UZS.CharCode}>UZS</option>
              <option value={cur.CAD.CharCode}>CAD</option>
            </select>
          </div>
          <div></div>
          <div className="h3 mt-3">Ваш результат:</div>
          {cur1 == 'AUD' && (
            <div>
              <h1>1 AUD ={(cur.AUD.Value / cur.UZS.Value).toFixed(1)} UZS</h1>
              <h1>1 AUD ={(cur.AUD.Value / cur.CAD.Value).toFixed(1)} CAD</h1>
            </div>
          )}
          {cur1 === 'UZS' && (
            <div>
              <h1>1 UZS ={(cur.UZS.Value / cur.AUD.Value).toFixed(1)} AUD</h1>
              <h1>1 UZS ={(cur.UZS.Value / cur.CAD.Value).toFixed(1)} CAD</h1>
            </div>
          )}
          {cur1 === 'CAD' && (
            <div>
              <h1>1 CAD ={(cur.CAD.Value / cur.AUD.Value).toFixed(1)} AUD</h1>
              <h1>1 CAD ={(cur.CAD.Value / cur.UZS.Value).toFixed(1)} UZS</h1>
            </div>
          )}
        </Container>
      )}
    </div>
  );
}
