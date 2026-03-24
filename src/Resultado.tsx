import { PieChart, Pie, Cell } from "recharts"

type ResultadoProps = {
    parcela: number
    principalMensal: number
    insurance: number
    tax: number
    hoa: number
    onRecalcular: () => void
}

export default function Resultado({ parcela, principalMensal, insurance, tax, hoa, onRecalcular }: ResultadoProps) {
    const dados = [
        { nome: "Principal & interest", valor: principalMensal, cor: "#7c6ff7", prefix: "" },
        { nome: "Homeowner's insurance", valor: insurance, cor: "#4ecdc4", prefix: "+ " },
        { nome: "Property tax", valor: tax, cor: "#ff6b6b", prefix: "+ " },
        { nome: "HOA fees", valor: hoa, cor: "#ffa94d", prefix: "+ " },
    ]

    return (
        <div className="resultado">
            <div style={{ color: "#aaa", alignSelf: "flex-start", fontSize: "1.1rem" }}>≡</div>
            <h2>Monthly<br />Payment</h2>

            <div className="grafico-wrapper">
                <PieChart width={180} height={180}>
                    <Pie
                        data={dados}
                        cx={90}
                        cy={90}
                        innerRadius={60}
                        outerRadius={82}
                        dataKey="valor"
                        stroke="none"
                        startAngle={90}
                        endAngle={-270}
                    >
                        {dados.map((item, index) => (
                            <Cell key={index} fill={item.cor} />
                        ))}
                    </Pie>
                </PieChart>
                <p className="parcela-centro">$ {parcela.toLocaleString("en-US")}</p>
            </div>

            <div className="detalhes">
                {dados.map((item, index) => (
                    <div key={index} className="detalhe-item">
                        <span className="bolinha" style={{ backgroundColor: item.cor }} />
                        <span className="detalhe-nome">{item.nome}</span>
                        <span className="detalhe-valor">{item.prefix}$ {item.valor.toLocaleString("en-US")}</span>
                    </div>
                ))}
                <button className="btn-calcular" onClick={onRecalcular} style={{ marginTop: "0.5rem" }}>
                    Recalculate
                </button>
            </div>
        </div>
    )
}