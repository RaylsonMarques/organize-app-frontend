import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResponseHttpDTO } from "@organize/shared";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ConsultUserService {

	constructor(private readonly http: HttpClient) {}
}
