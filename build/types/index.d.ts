import countriesRaw from './countries';
import { Country, Maybe, Province } from './types';
export declare const getCountries: () => Country[];
/**
 * Find the country object of the given country name
 *
 * @param {String}  name              country name
 * @param {Boolean} [useAlias]        use alias flag, default `false`
 * @return {Object} country           country object
 */
export declare function getCountryByName(name?: Maybe<string>, useAlias?: Maybe<boolean>): Maybe<Country>;
/**
 * Find the country object of the given country name or short name
 *
 * @param {String}  name              country name or short name (alpha2)
 * @param {Boolean} [useAlias]        use alias flag, default `false`
 * @return {Object} country           country object
 */
export declare function getCountryByNameOrShortName(name?: Maybe<string>, useAlias?: Maybe<boolean>): Maybe<Country>;
export declare const findCountryByName: typeof getCountryByName;
export declare const findCountryByNameOrShortName: typeof getCountryByNameOrShortName;
/**
 * Find the province object of the given province name
 *
 * @param {String}  name              english province name
 * @param {Boolean} [useAlias]        use alias flag, default `false`
 * @return {Object} province          province object
 */
export declare function getProvinceByName(country: Country, name?: Maybe<string>, useAlias?: Maybe<boolean>): Maybe<Province>;
/**
 * Find the province object of the given province name or short name
 *
 * @param {String}  name              english province name or short name
 * @param {Boolean} [useAlias]        use alias flag, default `false`
 * @return {Object} province          province object
 */
export declare function getProvinceByNameOrShortName(country: Country, name?: Maybe<string>, useAlias?: Maybe<boolean>): Maybe<Province>;
export declare const findProvinceByName: typeof getProvinceByName;
export declare const findProvinceByNameOrShortName: typeof getProvinceByNameOrShortName;
export default countriesRaw;
