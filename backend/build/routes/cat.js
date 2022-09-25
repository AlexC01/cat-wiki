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
const express_1 = __importDefault(require("express"));
const catServices_1 = require("../services/catServices");
const router = express_1.default.Router();
router.get("/cat/breeds", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.query;
        const cats = yield (0, catServices_1.getBreedByName)(search);
        res.send(cats);
    }
    catch (err) {
        res.status(500).send();
    }
}));
router.get("/cat/breeds/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit } = req.query;
        const cat = yield (0, catServices_1.getSingleBreed)(req.params.id, parseInt(limit, 10) || 8);
        res.send(cat);
    }
    catch (err) {
        res.status(500).send();
    }
}));
router.get("/cat/most-search", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cats = yield (0, catServices_1.getMostSearch)();
        res.send(cats);
    }
    catch (err) {
        res.status(500).send();
    }
}));
exports.default = router;
