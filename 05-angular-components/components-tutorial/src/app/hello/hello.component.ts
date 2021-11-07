import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>
      hello world {{ counter }}
    </p>
  `,
  styleUrls: ['./hello.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements OnInit {
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000);
  }

}
