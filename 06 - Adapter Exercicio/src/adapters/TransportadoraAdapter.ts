import ICorreiosTransport from "../correios/ICorreiosTransport";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreiosTransport{

    constructor(private transportadora: Transportadora){
        console.log("Adaptando Transportadora nos Correios")
    }
    sendCorrreios(): void {
        return this.transportadora.send();
    }
    receiveCorreios(): void {
        return this.transportadora.receive();
    }

}