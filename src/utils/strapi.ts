import { strapi } from "@strapi/client";

const BASEURL = import.meta.env.PUBLIC_BASEURL;

export const strapiClient = strapi({ baseURL: `${BASEURL}/api` });
export const strapiImage = (path: string) => `${BASEURL}${path}`;
