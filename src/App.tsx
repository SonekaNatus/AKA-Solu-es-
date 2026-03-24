import { useState } from "react"
import "./App.css"
import { calcularParcela } from "./utils/calculos"
import Resultado from "./Resultado"

function App() {
  const [preco, setPreco] = useState(609967)
  const [entrada, setEntrada] = useState(75100)
  const [prazo, setPrazo] = useState(30)
  const [taxa, setTaxa] = useState(7)
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [parcelaFinal, setParcelaFinal] = useState(0)

  const parcelaPreview = calcularParcela(preco, entrada, prazo, taxa)
  const entradaPct = preco > 0 ? ((entrada / preco) * 100).toFixed(2) : "0.00"

  const insurance = 67
  const tax = Math.round((preco * 0.008) / 12)
  const hoa = 50

  function handleCalcular() {
    setParcelaFinal(parcelaPreview)
    setMostrarResultado(true)
  }

  const anos = [30, 20, 10, 15]

  return (
    <div className="container">
      <div className="card">
        <div className="menu-icon">≡</div>
        <h1>Calculate<br />Mortgage</h1>

        <label>Home price</label>
        <div className="input-box">
          <div className="input-row">
            <span className="prefix">$</span>
            <input
              type="number"
              value={preco}
              onChange={(e) => setPreco(Number(e.target.value))}
            />
          </div>
          <div className="slider-track">
            <div className="slider-fill" style={{ width: `${((preco - 100000) / (2000000 - 100000)) * 100}%` }} />
            <input type="range" min={100000} max={2000000} step={1000} value={preco}
              onChange={(e) => setPreco(Number(e.target.value))} />
            <div className="slider-thumb" style={{ left: `calc(${((preco - 100000) / (2000000 - 100000)) * 100}% - 9px)` }} />
          </div>
        </div>

        <label>Down payment</label>
        <div className="input-box">
          <div className="input-row">
            <span className="prefix">$</span>
            <input
              type="number"
              value={entrada}
              onChange={(e) => setEntrada(Number(e.target.value))}
            />
            <span className="suffix">{entradaPct}%</span>
          </div>
          <div className="slider-track">
            <div className="slider-fill" style={{ width: `${(entrada / preco) * 100}%` }} />
            <input type="range" min={0} max={preco} step={1000} value={entrada}
              onChange={(e) => setEntrada(Number(e.target.value))} />
            <div className="slider-thumb" style={{ left: `calc(${(entrada / preco) * 100}% - 9px)` }} />
          </div>
        </div>

        <div className="label-row">
          <label>Length of loan</label>
          <span className="label-right">years</span>
        </div>
        <div className="botoes-prazo">
          {anos.map((ano) => (
            <button key={ano} className={prazo === ano ? "ativo" : ""} onClick={() => setPrazo(ano)}>
              {ano}
            </button>
          ))}
        </div>

        <label>Interest rate</label>
        <div className="input-box">
          <div className="input-row">
            <input
              type="number"
              value={taxa}
              onChange={(e) => setTaxa(Number(e.target.value))}
            />
            <span className="suffix">%</span>
          </div>
          <div className="slider-track">
            <div className="slider-fill" style={{ width: `${((taxa - 1) / (20 - 1)) * 100}%` }} />
            <input type="range" min={1} max={20} step={0.1} value={taxa}
              onChange={(e) => setTaxa(Number(e.target.value))} />
            <div className="slider-thumb" style={{ left: `calc(${((taxa - 1) / (20 - 1)) * 100}% - 9px)` }} />
          </div>
        </div>

        <button className="btn-calcular" onClick={handleCalcular}>Calculate</button>
      </div>

      {mostrarResultado && (
        <Resultado
          parcela={parcelaFinal}
          principalMensal={parcelaFinal - insurance - tax - hoa}
          insurance={insurance}
          tax={tax}
          hoa={hoa}
          onRecalcular={() => setMostrarResultado(false)}
        />
      )}
    </div>
  )
}

export default App