export interface PageQuery {
	pageNumber: number;
	pageSize: number;
}

export interface QueryBuilder {
	pageQuery: PageQuery;
	aditionalQuery: Map<string, string>;
	buildQueryMap(): Map<string, string>;
	buildQueryString(): string;
	buildPageQueryMap(): Map<string, string>;
}

export class PageRequest implements QueryBuilder {
	constructor(public pageQuery: PageQuery, public aditionalQuery: Map<string, string>) {}

	buildQueryMap(): Map<string, string> {
		const arrayPageQueryMap = Array.from(this.buildPageQueryMap());
		let buildQueryMap = new Map<string, string>([...arrayPageQueryMap]);

		if (this.aditionalQuery) {
			const arrayBuildQueryMap = Array.from(buildQueryMap);
			const arrayAditionalQuery = Array.from(this.aditionalQuery);
			buildQueryMap = new Map<string, string>([...arrayBuildQueryMap, ...arrayAditionalQuery]);
		}

		return buildQueryMap;
	}

	buildQueryString(): string {
		return Array.from(this.buildQueryMap())
			.map(itemArray => `${itemArray[0]}=${itemArray[1]}`)
			.join("&");
	}

	buildPageQueryMap(): Map<string, string> {
		const buildPageQueryMap = new Map<string, string>();
		buildPageQueryMap.set("page", `${this.pageQuery.pageNumber}`);
		buildPageQueryMap.set("size", `${this.pageQuery.pageSize}`);

		return buildPageQueryMap;
	}
}

export class Page<T> {
	constructor(public content: T[], public first: boolean, public last: boolean, public pageNumber: number, public totalPages: number, public totalElements: number) {}

	static fromResposne<T>(response: any): Page<T> {
		return new Page<T>(response.body.content, response.body.first, response.body.last, parseInt(response.body.number), parseInt(response.body.totalPages), parseInt(response.body.totalElements));
	}
}
