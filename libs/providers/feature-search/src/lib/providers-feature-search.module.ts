import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersDomainModule } from '@saraphan/providers/domain';
import { ProvidersSearchComponent } from './search.component';
import { ProvidersRoutingModule } from './providers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProvidersDomainModule, 
    ProvidersRoutingModule
  ],

})
export class ProvidersFeatureSearchModule {}
