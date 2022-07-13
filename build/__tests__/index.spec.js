"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const chai_1 = require("chai");
const index_1 = __importStar(require("../index"));
const Andorra = {
    alpha2: 'AD',
    alpha3: 'AND',
    countryCallingCodes: ['+376'],
    currencies: ['EUR'],
    ioc: 'AND',
    languages: ['cat'],
    name: 'Andorra',
    status: 'assigned',
    provinces: null,
    alias: null,
};
const NewfoundlandAndLabrador = {
    short: 'NL',
    name: 'Newfoundland and Labrador',
    alias: ['Newfoundland', 'Labrador'],
};
const California = {
    short: 'CA',
    name: 'California',
    alias: null,
};
const GuineaBissau = {
    alpha2: 'GW',
    alpha3: 'GNB',
    countryCallingCodes: ['+245'],
    currencies: ['XOF'],
    ioc: 'GBS',
    languages: ['por'],
    name: 'Guinea-Bissau',
    status: 'assigned',
    provinces: null,
    alias: ['Guinea Bissau'],
};
describe('Unit Testing ->', () => {
    describe('getCountries() ->', () => {
        it('should return an array', () => {
            (0, chai_1.expect)((0, index_1.getCountries)()).to.be.an('array');
        });
        it('should have `alpha2`, `alpha3`, `countryCallingCodes`, `currencies`, `ioc`, `languages`, `name`, `status`, `provinces` and `alias` as object keys', () => {
            (0, index_1.getCountries)().forEach((country) => {
                (0, chai_1.expect)(country).to.have.all.keys([
                    'alpha2',
                    'alpha3',
                    'countryCallingCodes',
                    'currencies',
                    'ioc',
                    'languages',
                    'name',
                    'status',
                    'provinces',
                    'alias',
                ]);
            });
        });
    });
    describe('alpha2 ->', () => {
        it('should return an object', () => {
            (0, chai_1.expect)(index_1.default.AD).to.be.an('object');
        });
        it('should have `alpha2`, `alpha3`, `countryCallingCodes`, `currencies`, `ioc`, `languages`, `name`, `status` `provinces`, `alias` as object keys', () => {
            Object.keys(index_1.default).forEach((key) => {
                if (lodash_1.default.isString(key) && key.length === 2) {
                    // @ts-ignore
                    (0, chai_1.expect)(index_1.default[key]).to.have.all.keys([
                        'alpha2',
                        'alpha3',
                        'countryCallingCodes',
                        'currencies',
                        'ioc',
                        'languages',
                        'name',
                        'status',
                        'provinces',
                        'alias',
                    ]);
                }
            });
        });
    });
    describe('Methods ->', () => {
        describe('Country Search #', () => {
            describe('getCountryByName()', () => {
                it('should be a function', () => {
                    (0, chai_1.expect)(index_1.getCountryByName).to.be.a('function');
                });
                it('should return `null` when no argument', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByName)()).to.eql(null);
                });
                it('should return country object when find it', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByName)('Guinea-Bissau')).to.eql(GuineaBissau);
                });
                it('should return country object by ignoring case', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByName)('GuiNea-BisSau')).to.eql(GuineaBissau);
                });
                it('should return `null` when searching alias with no useAlias parameter', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByName)('Guinea Bissau')).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `false`', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByName)('Guinea Bissau', false)).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByName)('Guinea Bissau', true)).to.eql(GuineaBissau);
                });
                it('should return `null` by ignoring case when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByName)('GuiNea BisSau', true)).to.eql(GuineaBissau);
                });
                it('should return country object when searching alias with useAlias parameter `true` and country has no province', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByName)('Andorra', true)).to.eql(Andorra);
                });
            });
            describe('findCountryByName()', () => {
                it('should be a function', () => {
                    (0, chai_1.expect)(index_1.findCountryByName).to.be.a('function');
                });
                it('should return `null` when no argument', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByName)()).to.eql(null);
                });
                it('should return country object when find it', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByName)('Guinea-Bissau')).to.eql(GuineaBissau);
                });
                it('should return country object when find it by ignoring case', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByName)('GuiNea-BisSau')).to.eql(GuineaBissau);
                });
                it('should return `null` when searching alias with no useAlias parameter', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByName)('Guinea Bissau')).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `false`', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByName)('Guinea Bissau', false)).to.eql(null);
                });
                it('should return country object when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByName)('Guinea Bissau', true)).to.eql(GuineaBissau);
                });
                it('should return country object by ignoring case when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByName)('GuiNea BisSau', true)).to.eql(GuineaBissau);
                });
                it('should return country object when searching alias with useAlias parameter `true` and country has no alias', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByName)('Andorra', true)).to.eql(Andorra);
                });
            });
            describe('getCountryByNameOrShortName()', () => {
                it('should be a function', () => {
                    (0, chai_1.expect)(index_1.getCountryByNameOrShortName).to.be.a('function');
                });
                it('should return `null` when no argument', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)()).to.eql(null);
                });
                it('should return country object when find it', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('Guinea-Bissau')).to.eql(GuineaBissau);
                });
                it('should return country object when find it using short name', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('GW')).to.eql(GuineaBissau);
                });
                it('should return country object by ignoring case', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('GuiNea-BisSau')).to.eql(GuineaBissau);
                });
                it('should return country object by ignoring case using short name', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('Gw')).to.eql(GuineaBissau);
                });
                it('should return `null` when searching alias with no useAlias parameter', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('Guinea Bissau')).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `false`', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('Guinea Bissau', false)).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('Guinea Bissau', true)).to.eql(GuineaBissau);
                });
                it('should return `null` when searching alias with useAlias parameter `true` using short name', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('GW', true)).to.eql(GuineaBissau);
                });
                it('should return `null` by ignoring case when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('GuiNea BisSau', true)).to.eql(GuineaBissau);
                });
                it('should return `null` by ignoring case when searching alias with useAlias parameter `true` using short name', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('Gw', true)).to.eql(GuineaBissau);
                });
                it('should return country object when searching alias with useAlias parameter `true` and country has no province', () => {
                    (0, chai_1.expect)((0, index_1.getCountryByNameOrShortName)('Andorra', true)).to.eql(Andorra);
                });
            });
            describe('findCountryByNameOrShortName()', () => {
                it('should be a function', () => {
                    (0, chai_1.expect)(index_1.findCountryByNameOrShortName).to.be.a('function');
                });
                it('should return `null` when no argument', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)()).to.eql(null);
                });
                it('should return country object when find it', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('Guinea-Bissau')).to.eql(GuineaBissau);
                });
                it('should return country object when find it using short name', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('GW')).to.eql(GuineaBissau);
                });
                it('should return country object when find it by ignoring case', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('GuiNea-BisSau')).to.eql(GuineaBissau);
                });
                it('should return country object when find it by ignoring case using short name', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('Gw')).to.eql(GuineaBissau);
                });
                it('should return `null` when searching alias with no useAlias parameter', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('Guinea Bissau')).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `false`', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('Guinea Bissau', false)).to.eql(null);
                });
                it('should return country object when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('Guinea Bissau', true)).to.eql(GuineaBissau);
                });
                it('should return `null` when searching alias with useAlias parameter `true` using short name', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('GW', true)).to.eql(GuineaBissau);
                });
                it('should return `null` by ignoring case when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('GuiNea BisSau', true)).to.eql(GuineaBissau);
                });
                it('should return `null` by ignoring case when searching alias with useAlias parameter `true` using short name', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('Gw', true)).to.eql(GuineaBissau);
                });
                it('should return country object when searching alias with useAlias parameter `true` and country has no alias', () => {
                    (0, chai_1.expect)((0, index_1.findCountryByNameOrShortName)('Andorra', true)).to.eql(Andorra);
                });
            });
        });
        describe('Province Search #', () => {
            describe('getProvinceByName()', () => {
                it('should be a function', () => {
                    (0, chai_1.expect)(index_1.getProvinceByName).to.be.a('function');
                });
                it('should return `null` when no provinces', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.AD)).to.eql(null);
                });
                it('should return `null` when no argument', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.CA)).to.eql(null);
                });
                it('should return province object when find it', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.CA, 'Newfoundland and Labrador')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when find it by ignoring case', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.CA, 'NewfoUndland and LabrAdor')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return `null` when searching alias with no useAlias parameter', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.CA, 'NewfoUndland')).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `false`', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.CA, 'NewfoUndland', false)).to.eql(null);
                });
                it('should return province object when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.CA, 'NewfoUndland', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province by ignoring case when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.CA, 'LabrAdor', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when searching alias with useAlias parameter `true` and province has no alias', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByName)(index_1.default.US, 'caLifoRnia', true)).to.eql(California);
                });
            });
            describe('findProvinceByName()', () => {
                it('should be a function', () => {
                    (0, chai_1.expect)(index_1.findProvinceByName).to.be.a('function');
                });
                it('should return `null` when no provinces', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.AD)).to.eql(null);
                });
                it('should return `null` when no argument', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.CA)).to.eql(null);
                });
                it('should return province object when find it', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.CA, 'Newfoundland and Labrador')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when find it by ignoring case', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.CA, 'NewfoUndland and LabrAdor')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return `null` when searching alias with no useAlias parameter', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.CA, 'NewfoUndland')).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `false`', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.CA, 'NewfoUndland', false)).to.eql(null);
                });
                it('should return province object when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.CA, 'NewfoUndland', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province by ignoring case when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.CA, 'LabrAdor', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when searching alias with useAlias parameter `true` and province has no alias', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByName)(index_1.default.US, 'caLifoRnia', true)).to.eql(California);
                });
            });
            describe('getProvinceByNameOrShortName()', () => {
                it('should be a function', () => {
                    (0, chai_1.expect)(index_1.getProvinceByNameOrShortName).to.be.a('function');
                });
                it('should return `null` when no provinces', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.AD)).to.eql(null);
                });
                it('should return `null` when no argument', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA)).to.eql(null);
                });
                it('should return province object when find it', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'Newfoundland and Labrador')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when find it using short name', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'NL')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when find it by ignoring case', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'NewfoUndland and LabrAdor')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when find it by ignoring case using short name', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'Nl')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return `null` when country has no short name province', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.BO, 'VA')).to.eql(null);
                });
                it('should return `null` when searching alias with no useAlias parameter', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'NewfoUndland')).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `false`', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'NewfoUndland', false)).to.eql(null);
                });
                it('should return province object when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'NewfoUndland', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when searching alias with useAlias parameter `true` using short name', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'NL', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province by ignoring case when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'LabrAdor', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province by ignoring case when searching alias with useAlias parameter `true` using short name', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.CA, 'Nl', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return `null` when country has no short name province with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.BO, 'VA', true)).to.eql(null);
                });
                it('should return province object when searching alias with useAlias parameter `true` and province has no alias', () => {
                    (0, chai_1.expect)((0, index_1.getProvinceByNameOrShortName)(index_1.default.US, 'caLifoRnia', true)).to.eql(California);
                });
            });
            describe('findProvinceByNameOrShortName()', () => {
                it('should be a function', () => {
                    (0, chai_1.expect)(index_1.findProvinceByNameOrShortName).to.be.a('function');
                });
                it('should return `null` when no provinces', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.AD)).to.eql(null);
                });
                it('should return `null` when no argument', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA)).to.eql(null);
                });
                it('should return province object when find it', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA, 'Newfoundland and Labrador')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when find it using short name', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA, 'NL')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when find it by ignoring case', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA, 'NewfoUndland and LabrAdor')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province object when find it by ignoring case using short name', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA, 'Nl')).to.eql(NewfoundlandAndLabrador);
                });
                it('should return `null` when country has no short name province', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.BO, 'VA')).to.eql(null);
                });
                it('should return `null` when searching alias with no useAlias parameter', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA, 'NewfoUndland')).to.eql(null);
                });
                it('should return `null` when searching alias with useAlias parameter `false`', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA, 'NewfoUndland', false)).to.eql(null);
                });
                it('should return province object when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA, 'NewfoUndland', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return province by ignoring case when searching alias with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.CA, 'LabrAdor', true)).to.eql(NewfoundlandAndLabrador);
                });
                it('should return `null` when country has no short name province with useAlias parameter `true`', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.BO, 'VA', true)).to.eql(null);
                });
                it('should return province object when searching alias with useAlias parameter `true` and province has no alias', () => {
                    (0, chai_1.expect)((0, index_1.findProvinceByNameOrShortName)(index_1.default.US, 'caLifoRnia', true)).to.eql(California);
                });
            });
        });
    });
});
