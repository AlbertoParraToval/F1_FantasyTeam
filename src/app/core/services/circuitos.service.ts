import { Injectable } from '@angular/core';
import { calendarModel } from '../models';

@Injectable({
  providedIn: 'root'
})

export class CircuitosService {
  public circuits: calendarModel[] = [
    {
      id:1,
      nomCircuito:"Albert Park",
      Pais:"Australia, Melbourne",
      foto:"https://drive.google.com/uc?export=view&id=19DYL-GRrmMWBXoOYdFb6BwP2xpf6GRRF"
    },
    {
      id:2,
      nomCircuito:"	Hockenheimring",
      Pais:"Alemania",
      foto:"https://drive.google.com/uc?export=view&id=1K6a3Kc2oAfA490FkldUkNeoj6c8wKbVI"
    },
    {
      id:3,
      nomCircuito:"Hungaroring",
      Pais:"Hungría",
      foto:"https://drive.google.com/uc?export=view&id=1RplKz0lGDIMkdElkC4DEaT3aaABLrnKv"
      
    },
    {
      id:4,
      nomCircuito:"Silverstone",
      Pais:"Gran Bretaña",
      foto:"https://drive.google.com/uc?export=view&id=17oT0sSF35ZdbtQPveQ3yNc0rJhV_IvK2"
    },
    {
      id:5,
      nomCircuito:"Circuit de Catalunya",
      Pais:"España",
      foto:"https://drive.google.com/uc?export=view&id=1ttPfLG7WlEkDs3hh0pL0EEw_kY4fR7fD"
    },
    {
      id:6,
      nomCircuito:"Redbull Ring",
      Pais:"Austria",
      foto:"https://drive.google.com/uc?export=view&id=1vZ98wTMKd0q9zrG2bjGqzO5qacp3_0ey"
    },
    {
      id:7,
      nomCircuito:"Interlagos",
      Pais:"Brasil",
      foto:"https://drive.google.com/uc?export=view&id=1owKYalfxfDUXfzPs0euvH--fxsZCpJi0"
    },
    {
      id:8,
      nomCircuito:"Hermanos Rodríguez",
      Pais:"Mexico",
      foto:"https://drive.google.com/uc?export=view&id=1PLsLnL8ZI6frtHgyeemeeDWDEEtieuGI"
    },
    {
      id:9,
      nomCircuito:"	Monza",
      Pais:"Italia",
      foto:"https://drive.google.com/uc?export=view&id=1OUEj5zmiPiokKbmK4DIWxo9hBU-6PuYb"
    },
    {
      id:10,
      nomCircuito:"Zandvoort",
      Pais:"Holanda",
      foto:"https://drive.google.com/uc?export=view&id=12UNisViiKhvtB6KwhXyenR56aomybdLM"
    },
    {
      id:11,
      nomCircuito:"	Bakú",
      Pais:"Azerbaián",
      foto:"https://drive.google.com/uc?export=view&id=1Nen11E-KfbRMVLyB5W2Ny8s0qxThj2Zp"
    },
    {
      id:12,
      nomCircuito:"Spa-Francorchamps",
      Pais:"Belgica",
      foto:"https://drive.google.com/uc?export=view&id=1YrgSyvavgPlN-4we7WO1YFJRTHI4A6rn"
    },

  ]
  constructor() { }
   //Aumente el id
  id:number = this.circuits.length + 1 ;

  public getCircuit(): calendarModel[] {
    return this.circuits;
  }

  public getCircuitById(id: number): calendarModel{
    return this.circuits[id];
  }

  public getCircuitImg(id: number): calendarModel{
    return this.circuits[id];
  }

  deleteCircuitById(id: number){
    this.circuits = this.circuits.filter(p=>p.id != id); 
  }

    addCircuit(circuitdata:calendarModel){
    circuitdata.id = this.id++
    this.circuits.push(circuitdata);
  }

  updateCircuit(circuitUpdate:calendarModel){
    var circuitdata = this.circuits.find(p=>p.id==circuitUpdate.id);
    if(circuitdata){
      circuitdata.nomCircuito = circuitUpdate.nomCircuito;
      circuitdata.Pais = circuitUpdate.Pais;
      circuitdata.foto = circuitUpdate.foto;
    }
  }
}
