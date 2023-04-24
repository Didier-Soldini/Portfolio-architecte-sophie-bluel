async function httpGet(url, params) {
    const response = await fetch(url, params);
    return await response.json();
}

async function httpPost(url,params) {
    const response = await fetch(url, params);
    return await response.json();
}

async function httpDelete(url, params) {
    const response = await fetch(url, params);
    return response;
}