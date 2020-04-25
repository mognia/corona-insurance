import {Component, Inject, Input, OnInit} from '@angular/core';
import {EthService} from '../../authModule/eth.service';
import {WEB3} from '../../authModule/tokens';
import Web3 from 'web3';
import {isAdmin , isDoctor} from 'corona-interface/ethereum'
declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/dashboard', title: 'ثبت و خرید', icon: 'dashboard', class: ''},
    {path: '/claim', title: 'مطالبه', icon: 'call_received', class: ''},
    {path: '/rate', title: 'امتیازدهی کاربران', icon: 'how_to_reg', class: 'doctor'},
    {path: '/admin-panel', title: 'پنل ادمین', icon: 'add_circle_outline', class: 'admin'},
    {path: '/contract-data' , title: 'اطلاعات قرارداد هوشمند' , icon: 'info', class: ''},
    {path: '/pay-demand' , title: 'برداشت وجه بیمه' , icon: 'money_off', class: ''}
];

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
    constructor(public ethService: EthService,
                @Inject(WEB3) private web3: any = Web3) {
    }

    async ngOnInit() {
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

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
