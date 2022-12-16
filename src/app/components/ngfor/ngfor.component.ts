import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  arrayFotos: any = [
    {
      url: "src/assets/tanya.png",
      description:"Tanya McQuoid-Hunt (Jennifer Coolidge) from 'The White Lotus' Season 2"
    },
    {
      url: "src/assets/harper.png",
      description:"Harper Spiller (Aubrey Plaza) from 'The White Lotus' Season 2"
    },
    {
      url: "src/assets/portia.png",
      description:"Portia (Harley Lu Richardson) from 'The White Lotus' Season 2"
    },
    {
      url: "src/assets/ethan.png",
      description:"Ethan Spiller (Will Sharpe) from 'The White Lotus' Season 2"
    },
    {
      url: "src/assets/cam.png",
      description:"Cameron Sullivan (Theo James) from 'The White Lotus' Season 2"
    }
  ]

}
