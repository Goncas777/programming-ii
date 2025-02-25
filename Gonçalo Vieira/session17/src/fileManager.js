import {homedir} from "node:os"

export class FileManager{
    static #filePath;
    static{
        this.#filePath = `${homedir()}/.todoapp.json`;
    }
}