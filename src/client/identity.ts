import { IdentityApi } from '../api/identity';
import { TstIdDDO } from '../api/types';
import { call } from './proxy';

export const identityApi: IdentityApi = {
  getIdentity() {
    return call<string>('identity.getIdentity');
  },
  getDDO(args) {
    return call<TstIdDDO>('identity.getDDO', args);
  },
  addAttributes(args) {
    return call<void>('identity.addAttributes', args);
  },
  removeAttribute(args) {
    return call<void>('identity.removeAttribute', args);
  }
};
