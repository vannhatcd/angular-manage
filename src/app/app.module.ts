import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./Components/Blocks/Menu/menu.component";
import { SlideComponent } from "./Components/Blocks/Slide/slide.component";

@NgModule({
  declarations: [AppComponent, MenuComponent, SlideComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
