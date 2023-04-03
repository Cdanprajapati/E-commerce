const base = "http://192.168.29.145:3000/api/";

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then((response) => response);
}

export function SignUpRequest(payload , URL = base) {
  return axiosClient.post(`/${URL}`, payload).then((response) => response);
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then((response) => response);
}
