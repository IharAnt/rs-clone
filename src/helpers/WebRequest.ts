import { ContentTypeEnum } from '../types/enums/http/HeadersEnums';
import HttpMethodEnum from '../types/enums/http/HttpMethodEnum';
import HttpStatusCode from '../types/enums/http/HttpStatusCodes';

export default class Webrequest {
  public async get<T>(endpoint: string): Promise<T> {
    try {
      const response: Response = await fetch(endpoint, {
        method: HttpMethodEnum.GET,
        headers: {
          Accept: ContentTypeEnum.applicationJson,
        },
      });
      if (response.status === HttpStatusCode.Ok) {
        return (await response.json()) as T;
      }
    } catch (error) {
      console.log('unexpected error: ', error);
    }
    return Promise.resolve({} as T);
  }

  public async getResponse(endpoint: string): Promise<Response> {
    const response: Response = await fetch(endpoint, {
      method: HttpMethodEnum.GET,
      headers: {
        Accept: ContentTypeEnum.applicationJson,
      },
    });

    return response;
  }

  public async post<T>(endpoint: string, body: object): Promise<T> {
    try {
      const response: Response = await fetch(endpoint, {
        method: HttpMethodEnum.POST,
        headers: {
          'Content-Type': ContentTypeEnum.applicationJson,
        },
        body: JSON.stringify(body),
      });

      return (await response.json()) as T;
    } catch (error) {
      console.log('unexpected error: ', error);
      return Promise.resolve({} as T);
    }
  }

  public async delete<T>(endpoint: string): Promise<T> {
    try {
      const response: Response = await fetch(endpoint, {
        method: HttpMethodEnum.DELETE,
        headers: {
          'Content-Type': ContentTypeEnum.applicationJson,
        },
      });

      return (await response.json()) as T;
    } catch (error) {
      console.log('unexpected error: ', error);
      return Promise.resolve({} as T);
    }
  }

  public async put<T>(endpoint: string, body: object): Promise<T> {
    try {
      const response: Response = await fetch(endpoint, {
        method: HttpMethodEnum.PUT,
        headers: {
          'Content-Type': ContentTypeEnum.applicationJson,
        },
        body: JSON.stringify(body),
      });

      return (await response.json()) as T;
    } catch (error) {
      console.log('unexpected error: ', error);
      return Promise.resolve({} as T);
    }
  }

  public async patch<T>(endpoint: string): Promise<T> {
    try {
      const response: Response = await fetch(endpoint, {
        method: HttpMethodEnum.PATCH,
        headers: {
          'Content-Type': ContentTypeEnum.applicationJson,
        },
      });

      if (response.status === HttpStatusCode.Ok) {
        return (await response.json()) as T;
      }
    } catch (error) {
      console.log('unexpected error: ', error);
    }
    return Promise.resolve({} as T);
  }

  public async patchResponse(endpoint: string, signal?: AbortSignal): Promise<Response> {
    const response: Response = await fetch(endpoint, {
      method: HttpMethodEnum.PATCH,
      headers: {
        Accept: ContentTypeEnum.applicationJson,
      },
      signal,
    });

    return response;
  }

  public generateQuery(queryParams: Record<string, string | number>): string {
    const entries = Object.entries(queryParams);
    return entries.length ? `?${entries.map((param) => `${param[0]}=${param[1]}`).join('&')}` : '';
  }
}
