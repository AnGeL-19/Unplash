
const baseURL = "http://localhost:8080/api/upload/";

export const fetchAddpostImg = (data) => {

    return fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export const fetchGetposts = () => {

    return fetch(baseURL);

}

export const fetchDeletePostImg = (id) => {

    const url = `${baseURL}${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });

}

export const fetchSearchPostImg = (label) => {

    const url = `${baseURL}search/${label}`;
    console.log(url);
    console.log({label});
    return fetch(url);

}