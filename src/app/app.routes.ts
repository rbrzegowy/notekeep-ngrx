import { Routes } from '@angular/router'
import { NoteFormComponent } from './components/note-form/note-form.component'
import { NotesListComponent } from './components/notes-list/notes-list.component'
import { HomeComponent } from './components/home/home.component'
import { NotificationListComponent } from './components/notification-list/notification-list.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NoteFormComponent },
  { path: 'edit/:id', component: NoteFormComponent },
  { path: 'list', component: NotesListComponent },
  { path: 'notifications', component: NotificationListComponent },
]
