import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import Web3 from 'web3';
import {WEB3} from './tokens';
import {EthService} from './eth.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [EthService, {
        provide: WEB3,
        useFactory: () => new Web3(Web3.givenProvider || 'ws://localhost:8546')
},
    ]
})

export class EthereumModule {
}
