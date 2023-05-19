export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum HTTP_CODE_ERROR_TEXT {
  BAD_REQUEST = 'Bad request',
  UNAUTHORIZED = 'You are unauthorized, please log in',
  NOT_FOUND = 'Page not found',
}

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
}
