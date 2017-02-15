import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { WebSocketService } from 'angular2-websocket-service'

@Injectable()
export class ServerSocket {
  private inputStream: Subject<any>
  public outputStream: Observable<any>

  constructor(private socketFactory: WebSocketService) {}

  public async connect() {
    if (this.outputStream)
      return this.outputStream

    this.outputStream = await this.socketFactory.connect(
      'ws://127.0.0.1:4201/ws',
      this.inputStream = new Subject<any>()
    )

    return this.outputStream
  }

  public send(message: any):void {
    this.inputStream.next(message)
  }
}
