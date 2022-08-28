import bcrypt from "bcryptjs";
import { promisify } from "util";

export const salt = bcrypt.genSaltSync(10);
export const hash = promisify(bcrypt.hash);
export const compare = promisify(bcrypt.compare);

