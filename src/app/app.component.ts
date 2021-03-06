import { pairwise, map, filter } from 'rxjs/operators'
import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'

import { DeezerPlayer } from './deezer-player/deezer-player.service'

const searchUrlRegex = /^\/search\//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    router: Router,
    // inject just to instantiate:
    deezerPlayer: DeezerPlayer,
  ) {
    if (window.scrollTo) {
      let scrollBackup = 0

      router.events
        .pipe(
          filter(event => event instanceof NavigationStart),
          map((event: NavigationStart) => event.url),
          pairwise(),
        )
        .subscribe(([prevUrl, url]) => {
          if (url.match(searchUrlRegex) && url !== prevUrl) {
            if (prevUrl === '/') scrollBackup = window.scrollY
            window.scrollTo(0, 0)
          } else if (url === '/' && prevUrl.match(searchUrlRegex)) {
            window.scrollTo(0, scrollBackup)
            setTimeout(() => {
              window.scrollTo(0, scrollBackup)
            }, 50)
          }
        })
    }
  }
}
