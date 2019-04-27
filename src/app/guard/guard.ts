import { DataServiceService } from './../service/data-service.service';
import { CanActivate,ActivatedRouteSnapshot ,RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class accessing implements CanActivate{
    constructor(
        private _dataShare:DataServiceService,
        private router:Router){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
          console.log('can activate called');
          if(this._dataShare.getLoggedInStatus()){
              return true;
          }
          return false;
      }
}