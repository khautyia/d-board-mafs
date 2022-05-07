import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from './auth.interceptor';

export const HttpInterceptProviders = [{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}
]