//import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { DividirAction, MultiplicarAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  // @Input() contadorAlHijo: number;
  // @Output() cambioContador = new EventEmitter<number>();

  contadorAlHijo: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe( valorContador => {
      this.contadorAlHijo = valorContador;
      console.log(valorContador);
    });
  }

  multiplicar() {
    //this.contadorAlHijo *= 2
    //this.cambioContador.emit(this.contadorAlHijo);
    const accion = new MultiplicarAction(5);
    this.store.dispatch( accion );
  }

  dividir() {
    //this.contadorAlHijo /= 2
    //this.cambioContador.emit(this.contadorAlHijo);
    const accion = new DividirAction(5);
    this.store.dispatch( accion );
  }

  resetNieto(nuevoContador: number) {    
    this.contadorAlHijo = nuevoContador;
    //this.cambioContador.emit(this.contadorAlHijo);

  }

}
