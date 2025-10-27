import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authentication } from '../auth/authentication';

export const dashGuard: CanActivateFn = (route, state) => {
    const _auth = inject( Authentication );
  const _router= inject( Router );

 return _auth.isLoggedIn() ||(_router.navigate(['/login']),false);
  

};
