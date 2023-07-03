import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log("Enviando encomenda via Transportadora.");
    }
    receive(): void {
        console.log("Recebendo encomenda via Transportadora.");
    }

}