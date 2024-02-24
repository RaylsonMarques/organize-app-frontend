import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IResponseHttpDTO } from "@organize/shared";
import { ISendCodeToActivateUser } from "../model/interface/ISendCodeToActivateUser";
import { ICreateBasicUser } from "../model/interface/ICreateBasicUser";

@Injectable({ providedIn: 'root'})
export class CreateUserService {

	constructor(private readonly http: HttpClient) {}

	public create(user: ICreateBasicUser, language: string): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.apiUrl}user/create?lang=${language}`, user);
	}

	public sendCodeActivation(payload: ISendCodeToActivateUser): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.apiUrl}user/code-activation`, payload);
	}

	public activate(payload: {userId: string;
		code: string;}): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.apiUrl}user/activate`, payload);
	}
}
