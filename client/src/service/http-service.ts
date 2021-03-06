class HttpService {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  async post<T>(path: string, body: {[key: string]: any}) {
    const url = `${this.url}/${path}`;
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
       credentials: 'include' ,
       cache: 'no-cache'
    }).then(response => response.json())
      .then(data => data as T);
  }
  async put<T>(path: string, body: {[key: string]: any}) {
    const url = `${this.url}/${path}`;
    return await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include',
      cache: 'no-cache'
    }).then(response => response.json())
    .then(data => data as T);
  }

  async get<T>(path: string, body: {[key: string]: any}) {
    const url = `${this.url}/${path}`;
    
    return await fetch(url, {
      method: 'GET',
      credentials: 'include',
      cache: 'no-cache'
    }).then(response => response.json())
    .then(data => data as T);
  }
}

export default new HttpService(`${process.env.BACK_END_URL || 'localhost'}:${process.env.PORT || 12345}`);
