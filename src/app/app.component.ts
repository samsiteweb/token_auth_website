import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  message: string;
  isError: boolean;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
}
