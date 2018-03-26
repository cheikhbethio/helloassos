import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ListAssosComponent } from './list-assos/list-assos/list-assos.component';
import { ViewAssosComponent } from './view-assos/view-assos.component';


const appRoutes: Routes = [
	{
		path: '',
		component: ListAssosComponent
	},
	{
		path: ':id',
		component: ViewAssosComponent
	},
	{
		path: '**',
		component: ListAssosComponent,
	}
];


@NgModule({
	imports: [RouterModule.forRoot(
		appRoutes,
		{
			// enableTracing: true , // <-- debugging purposes only
			preloadingStrategy: PreloadAllModules
		}
	)],
	exports: [
		RouterModule
	],
	providers: [],
})

export class AppRoutingModule { }

