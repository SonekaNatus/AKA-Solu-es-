export function calcularParcela(
    preco: number,
    entrada: number,
    prazo: number,
    taxa: number
): number {
    const principal = preco - entrada
    const taxaMensal = taxa / 100 / 12
    const meses = prazo * 12
    const parcela =
        (principal * taxaMensal * Math.pow(1 + taxaMensal, meses)) /
        (Math.pow(1 + taxaMensal, meses) - 1)

    return Math.round(parcela * 100) / 100
}