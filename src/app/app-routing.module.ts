import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NfcPageComponent } from './nfc-page/nfc-page.component';

const routes: Routes = [
  {
    path:'' , component:NfcPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
