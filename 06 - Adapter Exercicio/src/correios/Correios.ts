import ICorreiosTransport from "./ICorreiosTransport";

export default class Correios implements ICorreiosTransport{
    sendCorrreios(): void {
        console.log("Enviando encomenda via Correios.");
    }
    receiveCorreios(): void {
        console.log("Recebendo encomenda via Correios.");
    }

}