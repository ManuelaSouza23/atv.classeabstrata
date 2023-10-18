import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa{

    private cnpj: string;

    public constructor(_nome:string,_cnpj:string){
        super( _nome);
        this.cnpj
   }

   public setCnpj(_cnpj:string):void {
    this.cnpj;
  }

  public getCnpj():string {
    return this.cnpj;
  }

  public documentoIdentificador():string {
  return this.cnpj;
}

}

    












        
        
        

