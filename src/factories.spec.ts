import * as Factory from './factories';
import HistoryRoutingMode from './HistoryRoutingMode';

describe(`factories`, function() {
  describe(`routing mode factory`, function() {
    it(`creates history routing mode`, function() {
      expect(Factory.createRoutingMode('history')).toBeInstanceOf(HistoryRoutingMode);
    });

    it(`throws error if given mode name is not available`, function() {
      expect(() => Factory.createRoutingMode('non-existing-mode')).toThrow();
    });
  });
});
