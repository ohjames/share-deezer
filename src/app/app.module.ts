import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { JsonpModule } from '@angular/http'
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon'
import { WebSocketService } from 'angular2-websocket-service'

import { AppComponent } from './app.component'
import { ServerSocket } from './server-socket.service'
import { SearchInputComponent } from './search/search-input.component'
import { PlayerControlsComponent } from './player-controls/player-controls.component'

import { AppRoutingModule } from './app-routing.module'
import { SearchResultsComponent } from './search/search-results.component'
import { MusicQueueComponent } from './music-queue/music-queue.component'

import { SearchTerms } from './search/search-terms.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    MdIconModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SearchInputComponent,
    PlayerControlsComponent,
    SearchResultsComponent,
    MusicQueueComponent,
  ],
  providers: [
    MdIconRegistry,
    WebSocketService,
    ServerSocket,
    SearchTerms,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }