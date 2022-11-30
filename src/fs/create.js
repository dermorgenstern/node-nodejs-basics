import { promises as fsasync } from "fs"

const checkIfFileExists = async path => !!(await fsasync.stat(path).catch(e => false));

const create = async () => {
    const path = "./src/fs/files/fresh.txt";
    const exists = await checkIfFileExists(path);
    if (exists)
    {
        throw new Error("FS operation failed");
    }
    else
    {
        await fsasync.writeFile(path, "I am fresh and young");
    }
};

await create();