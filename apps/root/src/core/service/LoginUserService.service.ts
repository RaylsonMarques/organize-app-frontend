import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseHttpDTO } from '@organize/shared';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ILoginUser } from '../model/interface/ILoginUser';

@Injectable({ providedIn: 'root' })
export class LoginUserService {
	constructor(private readonly http: HttpClient) {}

	public login(payload: ILoginUser): Observable<IResponseHttpDTO> {
		return this.http.post<IResponseHttpDTO>(`${environment.apiUrl}login`, payload);
	}
}
