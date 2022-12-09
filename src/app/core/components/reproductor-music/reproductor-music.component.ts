import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor-music',
  templateUrl: './reproductor-music.component.html',
  styleUrls: ['./reproductor-music.component.scss'],
})
export class ReproductorMusicComponent implements OnInit {

  audio = new Audio();
  reproduciendo: boolean = false;
  constructor() {
    this.audio.src="";
    this.audio.load();
  }

  play(){
    this.audio.load();
    this.audio.play();
    this.reproduciendo = true;
  
  }

  pause(){
    this.audio.pause();
    this.reproduciendo = false;
  }



  ngOnInit() {}

}
