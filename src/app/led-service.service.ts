import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

const host = "http://localhost:5000";
@Injectable()
export class LedServiceService {
  constructor(private http: Http) {}

  async strobeLed(endpoint): Promise<Object> {
    try {
      let res = await this.http.get(host + endpoint).toPromise();
      return res;
    } catch (error) {
      await this.handleError(error);
    }
  }

  private handleError(error: any): Promise<any> {
    debugger;
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}
