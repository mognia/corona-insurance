import {Component, Inject, Input, OnInit} from '@angular/core';
import {EthService} from '../../authModule/eth.service';
import {WEB3} from '../../authModule/tokens';
import Web3 from 'web3';
import {isAdmin , isDoctor} from 'corona-interface/ethereum'
import {TranslateService} from '@ngx-translate/core';
declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}



@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    @Input() walletId: string;
    isDoc;
    isAdmin;
    dashboardLabel;
    claimLabel;
    contractDataLabel;
    payDemandlabel;
    constructor(public ethService: EthService,@Inject(WEB3) private web3: any = Web3 , private translate: TranslateService) {
    }


    async ngOnInit() {
        this.translate.get(['record-and-buy', 'claim', 'contract-data' , 'pay-demand'])
            .subscribe(translations => {
                this.dashboardLabel = translations['record-and-buy'];
                this.claimLabel = translations['claim'];
                this.contractDataLabel = translations['contract-data'];
                this.payDemandlabel = translations['pay-demand'];
            });
         const ROUTES: RouteInfo[] = [
            {path: '/dashboard', title: this.dashboardLabel, icon: 'dashboard', class: ''},
            {path: '/claim', title: this.claimLabel, icon: 'call_received', class: ''},
            {path: '/rate', title: 'امتیازدهی کاربران', icon: 'how_to_reg', class: 'doctor'},
            {path: '/admin-panel', title: 'پنل ادمین', icon: 'add_circle_outline', class: 'admin'},
            {path: '/contract-data' , title: this.contractDataLabel , icon: 'info', class: ''},
            {path: '/pay-demand' , title: this.payDemandlabel , icon: 'money_off', class: ''}
        ];
      const that = this;
        isAdmin().then(function (val) {
            that.isAdmin = val;

        });
      isDoctor().then(function (val) {
          console.log(val)
        that.isDoc = val;
      })
        // @ts-ignore
        if ('enable' in this.web3.currentProvider) {
            await this.web3.currentProvider.enable();
        }
        this.walletId = await this.web3.eth.getAccounts();


        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    truncate(input) {

        if (input.length > 5) {
            return input.substring(0, 5) + '...';
        } else {
            return input;
        }
    };

}
