import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CalcService {
    constructor(private http: Http) {

    }
    private url = 'http://localhost/script/TAXCALC.json';
    getCalcs() {
        return this.http.get(this.url).map((response: Response) => response.json());
    }

}

