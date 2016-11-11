/* This module is an example how you can package all services and components
 from Angular2-Material into one Angular2 module, which you can import in other modules
 */
import { NgModule, ModuleWithProviders }      from '@angular/core';

import { MdButtonModule }                     from '@angular2-material/button';
import { MdToolbarModule }                    from '@angular2-material/toolbar';

@NgModule({
  exports: [
    MdButtonModule,
    MdToolbarModule
  ]
})

export class MdModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: MdModule
      };
  }
}
