import axios from "axios";
const baseUrl = "http://192.168.29.145:3000/api/";
const axiosClient = axios.create({
  baseURL: baseUrl,
});


export function getRequest(URL = baseUrl) {
  return axiosClient.get(`/${URL}`).then((response) => response);  
}

export function postRequest( URL = baseUrl, payload) {
  return axiosClient
    .post(`/${URL}`, payload)
    .then((response) => console.log(response, "this is responce-->"));
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then((response) => response);
}
