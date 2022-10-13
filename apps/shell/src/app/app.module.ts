import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { Wrapper } from './wrapper.component';
import { MfeContainerComponent } from './mfe-container/mfe-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    Wrapper,
    MfeContainerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'remote-angular',
          loadChildren: () =>
            import('remote-angular/Module').then((m) => {
              console.log(m);
              return m.RemoteEntryModule;
            }),
        },
        {
          path: 'remote-react',
          component: Wrapper,
          data: {
            elementName: 'react-element',
            moduleName: 'remoteReact',
          },
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'dashboard',
          component: MfeContainerComponent,
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent, MfeContainerComponent],
})
export class AppModule {}
