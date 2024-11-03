import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';




const components = [
  HeaderComponent,
  FooterComponent
];

const modules = [
  CommonModule
 
];

@NgModule({
  declarations: [
    ...components,
  

    
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [
  ]
})
export class SharedModule { }
