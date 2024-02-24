"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.PageRequest = void 0;
class PageRequest {
    constructor(pageQuery, aditionalQuery) {
        this.pageQuery = pageQuery;
        this.aditionalQuery = aditionalQuery;
    }
    buildQueryMap() {
        const arrayPageQueryMap = Array.from(this.buildPageQueryMap());
        let buildQueryMap = new Map([...arrayPageQueryMap]);
        if (this.aditionalQuery) {
            const arrayBuildQueryMap = Array.from(buildQueryMap);
            const arrayAditionalQuery = Array.from(this.aditionalQuery);
            buildQueryMap = new Map([...arrayBuildQueryMap, ...arrayAditionalQuery]);
        }
        return buildQueryMap;
    }
    buildQueryString() {
        return Array.from(this.buildQueryMap())
            .map(itemArray => `${itemArray[0]}=${itemArray[1]}`)
            .join("&");
    }
    buildPageQueryMap() {
        const buildPageQueryMap = new Map();
        buildPageQueryMap.set("page", `${this.pageQuery.pageNumber}`);
        buildPageQueryMap.set("size", `${this.pageQuery.pageSize}`);
        return buildPageQueryMap;
    }
}
exports.PageRequest = PageRequest;
class Page {
    constructor(content, first, last, pageNumber, totalPages, totalElements) {
        this.content = content;
        this.first = first;
        this.last = last;
        this.pageNumber = pageNumber;
        this.totalPages = totalPages;
        this.totalElements = totalElements;
    }
    static fromResposne(response) {
        return new Page(response.body.content, response.body.first, response.body.last, parseInt(response.body.number), parseInt(response.body.totalPages), parseInt(response.body.totalElements));
    }
}
exports.Page = Page;
