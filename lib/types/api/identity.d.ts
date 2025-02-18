import { TstIdAttribute, TstIdDDO } from './types';
export interface IdentityApi {
    /**
     * Returns currently selected identity of logged in user.
     *
     * @throws NO_IDENTITY
     */
    getIdentity(): Promise<string>;
    /**
     * Queries Description Object of the identity.
     *
     * @param identity Arbitrary identity
     * @throws MALFORMED_IDENTITY
     */
    getDDO({ identity }: {
        identity: string;
    }): Promise<TstIdDDO>;
    /**
     * Adds attributes to the user identity.
     *
     * @param attributes Attributes to add
     * @throws NO_IDENTITY
     */
    addAttributes({ attributes }: {
        attributes: TstIdAttribute[];
    }): Promise<void>;
    /**
     * Removes attributes from the user identity.
     *
     * @param key Attribute key to remove
     * @throws NO_IDENTITY
     */
    removeAttribute({ key }: {
        key: string;
    }): Promise<void>;
}
