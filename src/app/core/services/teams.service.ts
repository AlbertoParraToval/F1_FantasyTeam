import { Injectable } from '@angular/core';
import { teamsModel } from '../models';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  
  public teamsInfo: teamsModel[] = [
    {
      id: 1,
      name: "Ferrari F1",
      puntosTemporada: "554 puntos.",
      description: "Ferrari es considerado uno de los cuatro grandes equipos de Fórmula 1, junto con Williams, McLaren y Mercedes.4​ Es el equipo activo más antiguo del campeonato, y es el que ha conseguido más victorias, campeonatos de pilotos (15) y campeonatos de constructores (16). Ha contado con muchos de los pilotos más destacados de la historia de la Fórmula 1.",
      image: "https://drive.google.com/uc?export=view&id=1Hxn2-eT99Shv1TgFWOKZzOhQ1ygeEU7R",
    },
    {
      id: 2,
      name: "Red Bull Honda Racing F1",
      puntosTemporada: "759 puntos.",
      description: "Red Bull Racing es un equipo privado de origen austríaco con sede en Milton Keynes, en Gran Bretaña. Es propiedad de la marca de bebidas homónima. El origen de Red Bull en el automovilismo se remonta al año 1987, cuando fue patrocinadora personal del piloto Gerhard Berger. Entre 1995 y 2004, patrocinó al equipo Sauber. Son los ultimos dos ganadores de constructores. ",
      image: "https://drive.google.com/uc?export=view&id=16xfpNrNv32IkwqrJqQyYdgPEAoF6fhOO",
    },
    {
      id: 3,
      name: "Mercedes AMG F1 Team",
      puntosTemporada: "515 puntos.",
      description: "Mercedes-Benz es una de las automotrices más exitosas de la Fórmula 1, considerada uno de los cuatro equipos con mejores resultados, junto con Williams, Ferrari y McLaren. Es el tercer equipo en la historia con más victorias (124) y poles (135) en todos los ítems anteriores, solamente por detrás de Ferrari y McLaren. Durante la era híbrida han ganado todo los campeonatos posibles.",
      image: "https://drive.google.com/uc?export=view&id=1vrcR5__OzrMQfvHD304yG4ip9Rbb1ThG",
    },
    {
      id: 4,
      name: "Mclaren F1 Team",
      puntosTemporada: "159 puntos.",
      description: "Es considerado uno de los cuatro grandes equipos de Fórmula 1, junto con Williams, Ferrari y Mercedes. ​ A lo largo de los años ha obtenido 8 Campeonatos de Constructores (tercera en el historial), 12 Campeonatos de Pilotos (segunda), 183 victorias (segunda), 155 poles (segunda) y 489 podios (segunda). Han corrido para ellos leyendas como Ayrton Senna.",
      image: "https://drive.google.com/uc?export=view&id=1J4GMAHSpirQjtq1F1Jaiz1QrD73-HP4M",
    },
    {
      id: 5,
      name: "Alpine F1 Team",
      puntosTemporada: "173 puntos.",
      description: "Alpine F1 Team es un equipo de Fórmula 1 de origen francés con fábrica en Enstone, Reino Unido. Es propiedad de Renault, que compitió en la categoría reina bajo ese nombre hasta 2020. La marca Alpine, de coches deportivos y de competición, la fundó Jean Rédélé en 1955.",
      image: "https://drive.google.com/uc?export=view&id=1lLCUWIWCE3Lwbgi5BADdHMKH2atYpa1G",
    },
    {
      id: 6,
      name: "Aston Martin F1 Team",
      puntosTemporada: "55 puntos.",
      description: "Aston Martin Cognizant F1 Team es un equipo privado de origen británico con sede en Silverstone, Gran Bretaña. Es propiedad de un consorcio de inversores encabezado por el multimillonario canadiense Lawrence Stroll. Aston Martin vuelve a la Fórmula 1 60 años después.",
      image: "https://drive.google.com/uc?export=view&id=1aJ0-jM2ZeiKDBZlL-4EnKnIOMsCY_-ND",
    },
    {
      id: 7,
      name: "Alfa Romeo Racing",
      puntosTemporada: "55 puntos.",
      description: "Alfa Romeo Racing es un equipo privado de origen suizo con sede en Hinwil, Suiza. Es fruto de la relación comercial entre el equipo Sauber F1 Team, que proporciona la fuerza logística, y la firma automovilística Alfa Romeo, que da nombre al binomio a través de un patrocinio. ",
      image: "https://drive.google.com/uc?export=view&id=1FU3jlmwKbxQcocT23vMKzISujNVff88T",
    },
    {
      id: 8,
      name: "Alpha Tauri Honda F1 ",
      puntosTemporada: "35 puntos.",
      description: "AlphaTauri Honda es un equipo privado de origen italiano con sede en Faenza, Italia. Es propiedad de la marca de bebidas Red Bull, que en 2020 ha rebautizado su filial Toro Rosso con el nombre de una marca de ropa de la compañía y anteriormente conocida como Minardi.",
      image: "https://drive.google.com/uc?export=view&id=1rCCXd-WpKzzEoDR-g3Z7Lr0i1w1eJQXX",
    },
    {
      id: 9,
      name: "Haas F1 Team",
      puntosTemporada: "37 puntos.",
      description: "Haas F1 Team es un equipo privado de origen estadounidense con sedes en Banbury Reino Unido y Kannapolis Estados Unidos. Es propiedad de su fundador Gene Haas, actualmente ocupan la 7º posición en la clasificación de constructores.",
      image: "https://drive.google.com/uc?export=view&id=13j5_aszpPPKtPJU8bRVIZwu4FMT1kL8z",
    },
    {
      id: 10,
      name: "Williams Racing F1",
      puntosTemporada: "8 puntos.",
      description: "El equipo Williams es una de las entidades con más historia en la Fórmula 1, con un legado que se remonta a la temporada 1977 y un nutrido palmarés compuesto por nueve títulos del Mundial de Constructores y siete del de Pilotos.",
      image: "https://drive.google.com/uc?export=view&id=1nHrwPXvF2R0NusouBY_YWWW9Lr2wJKpA",
    },
    ]

    id:number = this.teamsInfo.length + 1;
    constructor() { }

  public getTeam(): teamsModel[] {
    return this.teamsInfo;
  }

  public getTeamById(id: number): teamsModel{
    return this.teamsInfo[id];
  }

  deleteTeamById(id: number){
    this.teamsInfo = this.teamsInfo.filter(p=>p.id != id); 
  }

  addTeam(teamdata:teamsModel){
    teamdata.id = this.id++
    this.teamsInfo.push(teamdata);
  }

  updateTeam(teamUpdate:teamsModel){
    var teamdata= this.teamsInfo.find(p=>p.id==teamUpdate.id);
    if(teamdata){
      teamdata.name = teamUpdate.name;
      teamdata.description = teamUpdate.description;
      teamdata.puntosTemporada = teamUpdate.puntosTemporada;
      teamdata.image = teamUpdate.image;
    }
    
  }
}
