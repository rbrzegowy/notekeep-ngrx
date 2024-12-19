import { Notification } from './../../models/notification.model'
import { AsyncPipe } from '@angular/common'
import { Component } from '@angular/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './notification-list.component.html',
  styleUrl: './notification-list.component.scss'
})
export class NotificationListComponent {
  protected notifications$!: Observable<Notification[]>

}
