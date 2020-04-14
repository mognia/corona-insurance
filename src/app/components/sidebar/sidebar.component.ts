import {Component, Inject, Input, OnInit} from '@angular/core';
import {EthService} from '../../ethereum/eth.service';
import {WEB3} from '../../ethereum/tokens';
import Web3 from 'web3';

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
    {path: '/rate', title: 'امتیازدهی کاربران', icon: 'how_to_reg', class: ''},
    {path: '/add-doc', title: 'افزودن متخصص', icon: 'add_circle_outline', class: ''},
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    walletId: string;

    constructor(public ethService: EthService,
                @Inject(WEB3) private web3: any = Web3) {
    }

    async ngOnInit() {
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
