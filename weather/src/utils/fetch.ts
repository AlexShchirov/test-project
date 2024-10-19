export const getRequest = (url: string) => fetch(url, { method: "GET" }).then((data) => data.json());
