import { AthleteService } from './athlete.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Athlete } from '../models/athlete';
import { environment } from '../../environments/environment';

describe('AthleteService', () => {
  let MockHttpClient: jest.Mock<HttpClient>;
  let httpClient: HttpClient;

  beforeEach(() => {
    MockHttpClient = jest.fn<HttpClient>(() => ({
      get: jest.fn().mockImplementation(() => {
        return (new Subject<Athlete>()).asObservable();
      })
    }));
    httpClient = new MockHttpClient();
  });

  it('should be created', () => {
    const service = new AthleteService(httpClient);
    expect(service).toBeTruthy();
  });

  it('should ', () => {
    const service = new AthleteService(httpClient);
    service.me();

    expect(httpClient.get).toHaveBeenCalledWith(`${environment.urls.baseUrl}/api/me`);
  })
});
