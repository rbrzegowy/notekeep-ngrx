import { Component, inject } from '@angular/core'
import { Notes } from '../../models/notes.model' with {type: "json"}
import { Observable } from 'rxjs'
import { AsyncPipe } from '@angular/common'
import { Note } from '../../models/note.models'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {

  protected notes$!: Observable<Notes>

  onNoteDelete(id: Note['id']) {
    throw new Error('Method not implemented.')
  }
}
