export abstract class Bebe{
    private id: string;
    private nome: string;
    private peso: number;
    private altura: number;
 
    public constructor(_id:string, _nome:string,_peso:number, _altura:number) {
        this.id= _id;
    }

    public setId(_id:string):void{
        this.id= _id;
    }

    public getId():string{
        return this.id;
    }

    public setNome(_nome:string):void{
        this.nome= _nome;
    }
    public getNome():string{
        return this.nome;
    }


    public abstract documentoIdentificador():string;
}