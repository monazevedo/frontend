import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './avatar.css',
})
export class Avatar {
  logout() {
    throw new Error('Method not implemented.');
  }
  localNome: string = '';
  localImage!: string;
}
