import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  @Input() clientes: Cliente[] = [];
 /* clientes = [
    {
    nome: 'Hamilton',
    fone: '11223344',
    email: 'hamilton@email.com',
    },
    {
    nome: 'Arthur',
    fone: '22334455',
    email: 'arthur@email.com',
    },
    ];*/

  constructor() { }

  ngOnInit(): void {
  }

}
