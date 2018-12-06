import { ApiInterceptor } from './api.interceptor';
import { AuthService } from '../services/auth.service';
import { HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

describe('ApiInterceptor', () => {
  it('should be created', () => {
    const MockAuthService = jest.fn<AuthService>(() => ({}));
    const auth = new MockAuthService();
    const interceptor: ApiInterceptor = new ApiInterceptor(auth);
    expect(interceptor).toBeTruthy();
  });

  it('should add token to header if url matches baseUrl', () => {
    const MockRequest = jest.fn<HttpRequest<any>>(() => ({
      url: `${environment.urls.baseUrl}/test`,
      clone: () => {},
      headers: new HttpHeaders()
    }));
    const MockAuthService = jest.fn<AuthService>(() => ({
      getToken: jest.fn().mockReturnValue('abcd')
    }));
    const MockHttpHandler = jest.fn<HttpHandler>(() => ({
      handle: jest.fn()
    }));
    const req = new MockRequest();
    const nextReq = new MockRequest();
    const auth = new MockAuthService();
    const next = new MockHttpHandler();
    const interceptor: ApiInterceptor = new ApiInterceptor(auth);

    nextReq.headers.append('Authorization', 'Bearer abcd');

    const mockClone = jest.spyOn(req, 'clone');
    mockClone.mockReturnValue(nextReq);

    interceptor.intercept(req, next);

    expect(next.handle).toHaveBeenCalledWith(nextReq);
  });

  it('should not add token to header if url does not matches baseUrl', () => {
    const MockRequest = jest.fn<HttpRequest<any>>(() => ({
      url: `https://not-existing-domain/test`,
      clone: () => {},
      headers: new HttpHeaders()
    }));
    const MockAuthService = jest.fn<AuthService>(() => ({
      getToken: jest.fn().mockReturnValue('abcd')
    }));
    const MockHttpHandler = jest.fn<HttpHandler>(() => ({
      handle: jest.fn()
    }));
    const req = new MockRequest();
    const auth = new MockAuthService();
    const next = new MockHttpHandler();
    const interceptor: ApiInterceptor = new ApiInterceptor(auth);

    interceptor.intercept(req, next);

    expect(next.handle).toHaveBeenCalledWith(req);
  });
});
