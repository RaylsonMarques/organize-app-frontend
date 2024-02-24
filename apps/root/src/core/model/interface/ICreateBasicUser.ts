export interface ICreateBasicUser {
	people: {
		name: string;
		surname: string;
		nickname: string;
	};
	login: {
		access: string;
		email: string;
		password: string;
	};
}
