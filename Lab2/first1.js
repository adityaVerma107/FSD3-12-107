import { writeFile, appendFile, readFile} from "fs/promises";


await appendFile("hello1.txt", "\nFS is much easy")