import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: [
    './itinerary.component.scss',
    '../base-page/base-page.component.scss',
  ],
})
export class ItineraryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  itinerBus!: Array<any>;
  intinerBusError!: string;
  isLoading = false;
  name!: string;
  codigo!: string;

  constructor(
    private serv: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.itineraryBusLine();
  }

  ngOnInit(): void {}

  itineraryBusLine() {
    const id = this.activatedRoute.snapshot.params.id;
    this.isLoading = true;
    this.serv.setItinerary(id).subscribe(
      (data) => {
        this.name = data.nome;
        this.codigo = data.codigo;
        delete data.nome;
        delete data.idlinha;
        delete data.codigo;
        this.itinerBus = data;
      },
      (erro) => {
        this.intinerBusError = 'Não foi Possivel Consultar';
      },
      () => (this.isLoading = false)
    );
  }
}
