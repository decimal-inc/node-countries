"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProvinceByNameOrShortName = exports.findProvinceByName = exports.getProvinceByNameOrShortName = exports.getProvinceByName = exports.findCountryByNameOrShortName = exports.findCountryByName = exports.getCountryByNameOrShortName = exports.getCountryByName = exports.getCountries = void 0;
const lodash_1 = require("lodash");
const countries_1 = __importDefault(require("./countries"));
const getCountries = () => Object.keys(countries_1.default).reduce((acc, current) => {
    acc.push(countries_1.default[current]);
    return acc;
}, []);
exports.getCountries = getCountries;
/**
 * Find the country object of the given country name
 *
 * @param {String}  name              country name
 * @param {Boolean} [useAlias]        use alias flag, default `false`
 * @return {Object} country           country object
 */
function getCountryByName(name, useAlias) {
    var _a;
    if (!(0, lodash_1.isString)(name))
        return null;
    return ((_a = ((0, exports.getCountries)() || []).find(function (country) {
        if (useAlias) {
            return (country.name.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase()) ||
                (country.alias || []).find(function (alias) {
                    return alias.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase());
                }));
        }
        return country.name.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase());
    })) !== null && _a !== void 0 ? _a : null);
}
exports.getCountryByName = getCountryByName;
/**
 * Find the country object of the given country name or short name
 *
 * @param {String}  name              country name or short name (alpha2)
 * @param {Boolean} [useAlias]        use alias flag, default `false`
 * @return {Object} country           country object
 */
function getCountryByNameOrShortName(name, useAlias) {
    var _a;
    if (!(0, lodash_1.isString)(name))
        return null;
    return ((_a = ((0, exports.getCountries)() || []).find(function (country) {
        if (useAlias) {
            return (country.name.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase()) ||
                country.alpha2.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase()) ||
                (country.alias || []).find(function (alias) {
                    return alias.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase());
                }));
        }
        return (country.name.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase()) ||
            country.alpha2.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase()));
    })) !== null && _a !== void 0 ? _a : null);
}
exports.getCountryByNameOrShortName = getCountryByNameOrShortName;
exports.findCountryByName = getCountryByName;
exports.findCountryByNameOrShortName = getCountryByNameOrShortName;
/**
 * Find the province object of the given province name
 *
 * @param {String}  name              english province name
 * @param {Boolean} [useAlias]        use alias flag, default `false`
 * @return {Object} province          province object
 */
function getProvinceByName(country, name, useAlias) {
    var _a;
    if (!(0, lodash_1.isString)(name) || !Array.isArray(country.provinces))
        return null;
    return ((_a = (country.provinces || []).find(function (province) {
        if (useAlias) {
            return (province.name.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase()) ||
                (province.alias || []).find(function (alias) {
                    return alias.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase());
                }));
        }
        return province.name.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase());
    })) !== null && _a !== void 0 ? _a : null);
}
exports.getProvinceByName = getProvinceByName;
/**
 * Find the province object of the given province name or short name
 *
 * @param {String}  name              english province name or short name
 * @param {Boolean} [useAlias]        use alias flag, default `false`
 * @return {Object} province          province object
 */
function getProvinceByNameOrShortName(country, name, useAlias) {
    var _a;
    if (!(0, lodash_1.isString)(name) || !Array.isArray(country.provinces))
        return null;
    return ((_a = (country.provinces || []).find(function (province) {
        if (useAlias) {
            return (province.name.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase()) ||
                (province.short && province.short.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase())) ||
                (province.alias || []).find(function (alias) {
                    return alias.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase());
                }));
        }
        return (province.name.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase()) ||
            (province.short && province.short.toUpperCase() === (name === null || name === void 0 ? void 0 : name.toUpperCase())));
    })) !== null && _a !== void 0 ? _a : null);
}
exports.getProvinceByNameOrShortName = getProvinceByNameOrShortName;
exports.findProvinceByName = getProvinceByName;
exports.findProvinceByNameOrShortName = getProvinceByNameOrShortName;
exports.default = countries_1.default;
