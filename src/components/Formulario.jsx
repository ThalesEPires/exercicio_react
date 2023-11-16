import { useState } from "react";

const Formulario = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);

    const calculaIMC = () => {
        const resultado = peso / altura * altura;

        const abaixoDoPeso = resultado <=18.4;
        const pesoNormal = resultado >=15.5 && resultado <=24.9;
        const acimaDoPeso = resultado >=25 && resultado <=29.9;
        const obesidade1 = resultado >=30 && resultado <=34.9;
        const obesidade2 = resultado >=35 && resultado <=40;
        const obesidade3 = resultado >40;

        if (abaixoDoPeso) {
            return (
                <p>Você está abaixo do peso ideal</p>
            )
        }
        if (pesoNormal) {
            return (
                <p>Você com o peso ideal</p>
            )
        }
            if (acimaDoPeso) {
                return (
                    <p>Você está um pouco acima do peso ideal</p>
                )
            }
            if (obesidade1) {
                return (
                    <p>Você está bastante acima do peso ideal</p>
                )
            }
            if (obesidade2) {
                return (
                    <p>Você está muito acima do peso ideal</p>
                )
            }
            if (obesidade3) {
                return (
                    <p>Você está no último nível de obesidade, tome cuidado</p>
                )
            }
        }

    return (
        <form>
            <input type="number" placeholder="Altura" onChange={evento => setAltura(parseInt(evento.target.value))} />
            <input type="number" placeholder="Peso" onChange={evento => setPeso(parseInt(evento.target.value))} />
            <button type="button" onChange={calculaIMC()}>Calcular</button>
        </form>
    )
}
export default Formulario;