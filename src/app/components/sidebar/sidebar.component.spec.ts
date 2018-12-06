import { SidebarComponent } from './sidebar.component';
import { AthleteService } from 'src/app/services/athlete.service';

describe('SidebarComponent', () => {
  it('should create', () => {
    const MockAthleteService = jest.fn<AthleteService>(() => ({
      me: jest.fn()
    }));
    const service = new MockAthleteService();
    const component = new SidebarComponent(service);
    expect(component).toBeTruthy();
  });
});
