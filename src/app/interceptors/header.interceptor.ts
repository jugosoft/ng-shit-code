import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Добавим заголовок и ограничим число дел сотней
        const request = req.clone({
            headers: req.headers.append('custom-header', 'customHeaderValue'),
            params: req.params.get('_limit') ? req.params.set('_limit', '100') : req.params,
        })
        return next.handle(request).pipe(
            tap(event => {
                console.log(event);
            })
        );
    }
}