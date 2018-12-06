import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

describe('AuthService', () => {
  it('should be created', () => {
    const MockCookieService = jest.fn<CookieService>(() => {});
    const cookie: CookieService = new MockCookieService();
    const service: AuthService = new AuthService(cookie);
    expect(service).toBeTruthy();
  });
});
