import { Injectable } from '@angular/core';
import { driversModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  public drivers: driversModel[] = [
    {
      id:1,
      name:"Max Verstappen",
      nickname:"Super Max",
      dorsal: 1,
      puntos:"532 Points",
      image: "https://drive.google.com/uc?export=view&id=1IqRoRaocEKsxseJlusj8oQmxQmqOUzin"
    },
    {
      id:2,
      name:"Charles Leclerc",
      nickname:"Il Predestinato",
      dorsal: 16,
      puntos:"290 Points",
      image: "https://drive.google.com/uc?export=view&id=1NxxdwYqWm2c78UETD4O8TRoWrZZyEAZC"
    },
    {
      id:3,
      name:"Sergio Perez",
      nickname:"Checo",
      dorsal: 11,
      puntos:"288 Points",
      image: "https://drive.google.com/uc?export=view&id=1eoSib9mgjM-XtP9P3F2JX1178NaLroXQ"
    },
    {
      id:4,
      name:"George Russell",
      nickname:"Georgy",
      dorsal: 6,
      puntos:"266 Points",
      image: "https://drive.google.com/uc?export=view&id=10Bs117r_RWUySvXj1GrbdKe5cKVH7eCr"
    },
    {
      id:5,
      name:"Carlos Sainz",
      nickname:"Smooth Operator",
      dorsal: 55,
      puntos:"255 Points",
      image: "https://drive.google.com/uc?export=view&id=1skDDQBIzQxvJ3YHzGqyvxUk9RMGtfr6E"
    },
    {
      id:6,
      name:"Lewis Hamilton",
      nickname:"Hamilton",
      dorsal: 44,
      puntos:"245 Points",
      image: "https://drive.google.com/uc?export=view&id=1xMGKU-Ma6UZkGN-0zZJ9XRYrKZNPBw8l"
    },
    {
      id:7,
      name:"Lando Norris",
      nickname:"Norrizsio",
      dorsal: 4,
      puntos:"125 Points",
      image: "https://drive.google.com/uc?export=view&id=1O4gFayzKMhUtTh2feCDY2vhU6Z-xyrQd"
    },
    {
      id:8,
      name:"Esteban Ocon",
      nickname:"Mojon",
      dorsal: 31,
      puntos:"80 Points",
      image: "https://drive.google.com/uc?export=view&id=1Yu1J6Os7f-XN0fzBKdhR2jvXWc7RS5Ho"
    },
    {
      id:9,
      name:"Fernando Alonso",
      nickname:"Nano",
      dorsal: 14,
      puntos:"70 Points",
      image: "https://drive.google.com/uc?export=view&id=1i68D7SC_SbTta-ILwQmQDDVvE95wgFF7"
    },
    {
      id:10,
      name:"Yuki Tsunoda",
      nickname:"Peligro Japonés",
      dorsal: 22,
      puntos:"40 Points",
      image: "https://drive.google.com/uc?export=view&id=1wtV3NmdFsVDjbJ42NSfdI9nuZvuUXCbt"
    },
    {
      id:11,
      name:"Pierre Gasly",
      nickname:"Gabacho",
      dorsal: 10,
      puntos:"38 Points",
      image: "https://drive.google.com/uc?export=view&id=1RHp3mg2jD1YNKGgyO2RYdzLMcyU5hrGx"
    },
    {
      id:12,
      name:"Daniel Ricciardo",
      nickname:"Ricky",
      dorsal: 3,
      puntos:"35 Points",
      image: "https://drive.google.com/uc?export=view&id=1vazUWwbbeeJcApGfGpX2nkHC-Cv28v5y"
    },
    {
      id:13,
      name:"Kevin Magnussen",
      nickname:"K-Mag",
      dorsal: 20,
      puntos:"33 Points",
      image: "https://drive.google.com/uc?export=view&id=1lx14XVqUoDxcU6lWJ2IQWD49G-6JALc-"
    },
    {
      id:14,
      name:"Mick Schumacher",
      nickname:"Mini Schumi",
      dorsal: 47,
      puntos:"31 Points",
      image: "https://drive.google.com/uc?export=view&id=1zbd9jOPnShR69IsQXarFtiF3W8E9w-dx"
    }
    ,
    {
      id:15,
      name:"Sebastian Vettel",
      nickname:"Seb",
      dorsal: 5,
      puntos:"30 Points",
      image: "https://drive.google.com/uc?export=view&id=1C4CU7ashKS38S_nwD13-3f8rSDxhoZ4j"
    }
    ,
    {
      id:16,
      name:"Valtery Bottas",
      nickname:"Bottery",
      dorsal: 77,
      puntos:"24 Points",
      image: "https://drive.google.com/uc?export=view&id=1cBejNm4y9AE_-amezrqbZU0XcrIKfUhG"
    }
    ,
    {
      id:17,
      name:"Guan yu Zhou",
      nickname:"El chino de calidad",
      dorsal: 34,
      puntos:"19 Points",
      image: "https://drive.google.com/uc?export=view&id=1qmQX8gMbdlv61Y2l9PXJrOZKSV69F8Wb"
    }
    ,
    {
      id:18,
      name:"Alexander Albon",
      nickname:"Albonio",
      dorsal: 9,
      puntos:"16 Points",
      image: "https://drive.google.com/uc?export=view&id=1urIFyK4qqAdyWv0CgK6CRHmaLtm1Yqi-"
    }
    ,
    {
      id:19,
      name:"Lance Stroll",
      nickname:"Senna Canadiense",
      dorsal: 13,
      puntos:"15 Points",
      image: "https://drive.google.com/uc?export=view&id=1zaTUGzMCSnCDc9HVKU7HUfxezIl0IE3p"
    }
    ,
    {
      id:20,
      name:"Nicolas Latifi",
      nickname:"Goatifi",
      dorsal: 23,
      puntos:"0 Points",
      image: "https://drive.google.com/uc?export=view&id=1d2q_kfFAEnSoweQfUWQ7iVJ6t4ONaX5E"
    }
  ]

  //Aumente el id
  id:number = this.drivers.length + 1 ;

  public getDriver(): driversModel[] {
    return this.drivers;
  }

  public getDriverById(id: number): driversModel{
    return this.drivers[id];
  }

  public getDriverImg(id: number): driversModel{
    return this.drivers[id];
  }

  deleteDriverById(id: number){
    this.drivers = this.drivers.filter(p=>p.id != id); 
  }

  addDriver(driverdata:driversModel){
    driverdata.id = this.id++
    this.drivers.push(driverdata);
  }

  updateDriver(driverUpdate:driversModel){
    var driverdata = this.drivers.find(p=>p.id==driverUpdate.id);
    if(driverdata){
      driverdata.name = driverUpdate.name;
      driverdata.nickname = driverUpdate.nickname;
      driverdata.dorsal = driverUpdate.dorsal;
    }
  }
}
