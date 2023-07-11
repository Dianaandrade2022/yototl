import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  redes:Array<string> = [
    'https://www.facebook.com/encuentroyolotl/',
    'mailto:encuentro.yolotl@gmail.com',
    'https://www.instagram.com/yolotlhistoriasquelaten/',
  ];
  capitulos:Array<string> = [
    'https://open.spotify.com/episode/1M3JmWIRR2fBlG9DcXHuwE',
    'https://open.spotify.com/episode/2bQ1rdBonGdHx26n6Cuwsp',
    'https://open.spotify.com/episode/4J8a5zc4DIkX7vzVQJm38o',
    'https://open.spotify.com/episode/1aRZSaTKylbkvvsx1e06Vz',
    'https://open.spotify.com/episode/2ryBRI5WK3yr3aXUZECOtl'
  ]
}
