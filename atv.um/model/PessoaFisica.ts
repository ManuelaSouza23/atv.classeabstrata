import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa{
    
    private cpf: string;

    public constructor(_nome:string, _cpf:string){
        super( _nome);
        this.cpf
    }

   public setCpf(_cpf:string):void {
    this.cpf;
   }

   public getCpf():string {
    return this.cpf;
   }

   public documentoIdentificador():string {
     return this.cpf;
   }

}