//import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  // @Input() contadorAlNieto: number;
  // @Output() contadorCambio = new EventEmitter<number>();
  contadorAlNieto: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe( valorContador => {
      this.contadorAlNieto = valorContador;
      console.log(valorContador);
    });
  }

  reset() {
    // this.contadorAlNieto =  0
    // this.contadorCambio.emit(0);
    const accion = new ResetAction();
    this.store.dispatch( accion );
  }

}

