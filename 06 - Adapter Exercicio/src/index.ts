import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreiosTransport from "./correios/ICorreiosTransport";
import Transportadora from "./transportadora/Transportadora";

const transport : ICorreiosTransport = new Correios();
transport.sendCorrreios();
transport.receiveCorreios();

const transport2 : ICorreiosTransport = new TransportadoraAdapter(new Transportadora());
transport2.sendCorrreios();
transport2.receiveCorreios();

