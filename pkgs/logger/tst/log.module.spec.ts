import { LogModule } from '../src/logger.module';

describe('JwtModule', () => {
  let logModule: LogModule;

  beforeEach(() => {
    logModule = new LogModule(null);
  });

  it('should create an instance', () => {
    expect(logModule).toBeTruthy();
  });
});
