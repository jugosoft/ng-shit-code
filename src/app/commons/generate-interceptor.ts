import { HttpInterceptor, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";

export function generateInterceptor<Provider extends HttpInterceptor>(interceptor: new () => Provider) {
    return {
        provide: HTTP_INTERCEPTORS,
        useClass: interceptor,
        multi: true,
    };
}