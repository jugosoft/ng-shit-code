import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPost } from 'src/app/app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  form: FormGroup;

  public title: string;
  public text: string;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('sample@mylo.com'),
      password: new FormControl(''),
    });
  }

  submit() {
    Object.entries(this.form.value).forEach(
      (element) => console.log(`Form element: ${element[0]} with value ${element[1]}`)
    );
  }
}
