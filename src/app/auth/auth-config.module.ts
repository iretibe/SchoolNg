import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {            
            authority: 'https://itsolvesolution.org/salesmanagersts',
            redirectUrl: `${window.location.origin}/callback`,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'sales.angular.code',
            scope: 'address email openid profile salesapi offline_access', // 'openid profile offline_access ' + your scopes
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            renewTimeBeforeTokenExpiresInSeconds: 30,
            logLevel: LogLevel.Debug,
            postLoginRoute: '/home',
            forbiddenRoute: '/forbidden',
            unauthorizedRoute: '/unauthorized',
            historyCleanupOff: true
        }
    })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
