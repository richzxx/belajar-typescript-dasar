"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLaptop_1 = __importDefault(require("./BaseLaptop"));
class Acer extends BaseLaptop_1.default {
    // Type nya bebas karena Generic, tergantung nilai pertama yang di Input ke dalam Argumen.
    //TODO Jika, num maka Typenya akan otomatis menjadi number dan jika Str maka Typenya akan otomatis menjadi String
    constructor(type, numeric, touchButton) {
        super("Acer", type, numeric, touchButton);
    }
}
exports.default = Acer;
