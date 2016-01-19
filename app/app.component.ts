/**
 * Created by robertkarlsson on 18/01/16.
 */
import {Component} from 'angular2/core';
import {GemStoreComponent} from './gemstore.component';

@Component({
    selector: 'my-app',
    template: '<div> <gem-store></gem-store> </div>',
    directives: [GemStoreComponent]
})


export class AppComponent{

}