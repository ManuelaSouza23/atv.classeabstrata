import { PessoaFisica } from "./model/PessoaFisica";
import { PessoaJuridica } from "./model/PessoaJuridica";

const pf= new PessoaFisica (`Slipknot`,`123456789`);
pf.setNome(`Jairo`);
pf.setCpf(`0987654321`);
console.log(pf.getNome());
console.log(pf.getCpf());


const pj = new PessoaJuridica (`Copercana`,`0987654321`);
pj.setNome(`Icaro`);
pj.setCnpj(`09876543215421`);
console.log(pj.getNome());
console.log(pj.getCnpj());