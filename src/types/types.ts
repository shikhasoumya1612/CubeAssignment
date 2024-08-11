export interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
}

export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Location;
  email: string;
  login: {
    uuid: string;
  };
  phone: string;
}
