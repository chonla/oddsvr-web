import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  it('should be created', () => {
    const MockAuthService = jest.fn<AuthService>(() => ({
      isLogin: jest.fn()
    }));
    const service = new MockAuthService();
    const guard: AuthGuard = new AuthGuard(service);
    expect(guard).toBeTruthy();
  });
});
