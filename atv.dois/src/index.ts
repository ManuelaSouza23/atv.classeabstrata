import { BebeNatimorto } from "./BebeNatimorto";
import { BebeNormal } from "./BebeNormal";
import { BebePrematuro } from "./BebePrematuro";

const b1= new BebeNatimorto (`23344555`,`Huhu`, 40, 1.55, `Dor`);
b1.setId(`44556677654`);
b1.setNome(`Haha`);
b1.setPeso(100);
b1.setAltura(1.66);
b1.setCausa(`Dores`);
console.log(b1.getId());
console.log(b1.getNome());
console.log(b1.getPeso());
console.log(b1.getAltura());
console.log(b1.getCausa());

const b2= new BebeNormal (`23344555`,`Huhu`, 40, 1.55, true);
b2.setId(`44556677654`);
b2.setNome(`Haha`);
b2.setPeso(100);
b2.setAltura(1.66);
b2.setVacinado(false);
console.log(b2.getId());
console.log(b2.getNome());
console.log(b2.getPeso());
console.log(b2.getAltura());
console.log(b2.getVacinado());

const b3= new BebePrematuro (`4567890987654`,`Kiki`, 45, 1.56, 30);
b3.setId(`987654`);
b3.setNome(`Tita`);
b3.setPeso(101);
b3.setAltura(1.61);
b3.setSemanasGestacao(40);
console.log(b3.getId());
console.log(b3.getNome());
console.log(b3.getPeso());
console.log(b3.getAltura());
console.log(b3.getSemanasGestacao());
