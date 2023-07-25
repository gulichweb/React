export default class FetchData {
    constructor() {
        this._urlBase = "https://reqres.in/api";
        this._urlLocal = "http://localhost:3000";
    }

    async fetchData(url) {
        const res = await fetch(`${this._urlBase}${url}`);

        if(!res.ok) {
            throw new Error(`Ссылка сломанная ${url}, статус ${res.status}`);

    }
    const  json = await res.json();

    return json;
}

getAllpost() {
    return this.fetchData('/users?page=1');
}

getPostById(id) {
    return this.fetchData(`/users/${id}`);
}

getPostByIdFull(id) {
    return this.fetchData(`${this._urlFull}/users/${id}`);
}


}
