const baseUrl =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export const fetchAllUsers = (): Promise<any> =>
  fetch(baseUrl).then((response) => response.json());

export const fetchSingleUser = (id: string | undefined): Promise<any> =>
  fetch(`${baseUrl}/${id}`).then((response) => response.json());
