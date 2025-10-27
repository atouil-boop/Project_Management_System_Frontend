import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authentication } from '../auth/authentication';

export const loginGuard: CanActivateFn = (route, state) => {
  const _auth = inject( Authentication );
  const _router= inject( Router );

    if(_auth.isLoggedIn() == false){
    return true;
  }else{
    _router.navigate(['/dashboard']);
    return false;
  }
};
