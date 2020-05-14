import { DataTypes } from "./Types";
const protocol = "http";
const hostname = "localhost";
const port = 3500;
export const RestUrls = {
    [DataTypes.CUSTOMERS]:`${protocol}://${hostname}:${port}/api/customers`,
    [DataTypes.TREATS]: `${protocol}://${hostname}:${port}/api/treats`
}