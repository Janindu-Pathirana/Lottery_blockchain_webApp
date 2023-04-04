import web3 from "./web3";
import config from "./config.json";

const contract = config.contract;
const abi = config.abi;

export default new web3.eth.Contract(abi, contract);
