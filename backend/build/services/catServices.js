"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostSearch = exports.getSingleBreed = exports.getBreedByName = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const baseURL = "https://api.thecatapi.com/v1";
const getBreedByName = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(`${baseURL}/breeds/search?q=${query}`, {
        headers: { "x-api-key": process.env.CAT_API_KEY || "" }
    });
    if (response.status === 404) {
        throw new Error();
    }
    const result = (yield response.json());
    return result;
});
exports.getBreedByName = getBreedByName;
const getSingleBreed = (breedId, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(`${baseURL}/images/search?breed_id=${breedId}&limit=${limit}`, {
        headers: { "x-api-key": process.env.CAT_API_KEY || "" }
    });
    if (response.status === 404) {
        throw new Error();
    }
    const result = (yield response.json());
    return result;
});
exports.getSingleBreed = getSingleBreed;
const getMostSearch = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(`${baseURL}/favourites`, {
        headers: { "x-api-key": process.env.CAT_API_KEY || "" }
    });
    if (response.status === 404) {
        throw new Error();
    }
    const result = (yield response.json());
    const mostSearch = (yield mapMostSearch(result));
    return mostSearch;
});
exports.getMostSearch = getMostSearch;
const mapMostSearch = (arr) => __awaiter(void 0, void 0, void 0, function* () {
    const newArr = yield Promise.all(arr.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, exports.getSingleBreed)(item.sub_id, 1);
        const newObj = {
            id: response[0].breeds[0].id,
            name: response[0].breeds[0].name,
            description: response[0].breeds[0].description,
            image: { id: response[0].id, url: response[0].url }
        };
        return newObj;
    })));
    return newArr;
});
