import { Component, effect, inject, input } from '@angular/core'
import { FormsModule, NgModel } from '@angular/forms'
import { Note } from '../../models/note.models'
import { UUID } from '../../models/uuid.model'

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent {
  id = input<UUID>()

  protected note = {
    id: '',
    createdDate: '',
    title: '',
    content: '',
    color: '',
    tags: '',
    notificationDate: null
  }

  getNoteOnId = effect(() => {
    const id = this.id()
    if (!id) {
      return
    }
    this.note = {
      id: id,
      createdDate: '',
      title: 'test',
      content: 'test',
      color: 'test',
      tags: '',
      notificationDate: null
    }
  })
  onSave() {
    const newNote: Note = {
      ...this.note,
      id: this.id() ?? crypto.randomUUID(),
      createdDate: new Date(),
    }
  }
}
