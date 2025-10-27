import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authentication } from '../auth/authentication';

export const adminGuard: CanActivateFn = (route, state) => {
  const _auth = inject( Authentication);
  const _router= inject( Router );

  if( _auth.getDataFromToken().role == 'admin' ){
    return true;
  }else{
    _router.navigate(['/dashboard/projects']);
    return false;
  }
};
