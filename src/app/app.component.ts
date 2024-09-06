import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightOnHoverDirective } from './italic-on-hover.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightOnHoverDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'directiva-personalizada';
}
