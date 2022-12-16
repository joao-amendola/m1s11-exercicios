import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePhilips'
})
export class CapitalizePhilipsPipe implements PipeTransform {

  transform(textoRecebido:string, ...args: unknown[]): unknown {
    const meuTexto:string = textoRecebido;
    const palavras = meuTexto.split(" ");

    return palavras.map((palavra) => { 
      return palavra[0].toUpperCase() + palavra.substring(1); 
  }).join(" ");
  }

}
