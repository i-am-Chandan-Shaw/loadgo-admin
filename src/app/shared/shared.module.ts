import { NgModule } from "@angular/core";
import { primeNgModule } from "./prime-ng.module";
import { TooltipVisibilityDirective } from "./directives/tooltip-visibility.directive";

@NgModule({
  imports: [primeNgModule, ],
  exports: [primeNgModule, ]
})

export class SharedModule { }