export interface IRegisterInput {
  username: string;
  password: string;
  confirmPassword: string;
}

export type IUser = {
  id: string;
  loginInfo: {
    name: string;
    password: string;
  };
  name: {
    fullName: string;
    nickName: string;
  };
  avatar: string;
  phone: string;
  address: {
    street: string;
    number: string;
  };
  email: string;
  sex: string;
  nation: string;
};

export interface loginInput {
  username: string;
  password: string;
}

export interface countries {
  code: string;
  currencyCodes: string[];
  name: string;
  wikiDataId: string;
}

export interface IUserInfo {
  fullName: string;
  nickName: string;
  avatar: string;
  sex: string;
  nation: string;
}
