import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CapitalizarPipe } from './capitalizar.pipe';
import { JsonFilterPipe } from './json-filter.pipe';
import { IconSearchPipe } from './search-filter.pipe';
import { TrimPipe } from './trim.pipe';

@NgModule({
	declarations: [TrimPipe, JsonFilterPipe, CapitalizarPipe, IconSearchPipe],
	exports: [TrimPipe, JsonFilterPipe, IconSearchPipe],
	imports: [CommonModule],
})
export class BcpaPipeModule {}
