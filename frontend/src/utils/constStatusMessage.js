const moviesNotFound = 'По вашему запросу ничего не найдено.';
const badRequest = 'Во время запроса произошла ошибка. Подождите немного и попробуйте ещё раз';
const notUnique = 'Пользователь с таким email уже существует';
const registerError = 'При регистрации пользователя произошла ошибка.';
const registerSuccessful = 'Регистрация прошла успешно';
const loginError = 'Вы ввели неправильный логин или пароль.';
const loginSuccessful = 'Вход произведенуспешно';
const authorizatioError =
  'При авторизации произошла ошибка. Токен не передан или передан не в том формате.';
const tokenInvalid = 'При авторизации произошла ошибка. Переданный токен некорректен.';
const updateError = 'При обновлении профиля произошла ошибка.';
const updateSuccessful = 'Ваши данные обновлены';
const internalServerError = 'На сервере произошла ошибка.';
const pageNotFound = 'Страница по указанному маршруту не найдена.';

module.exports = {
  moviesNotFound,
  badRequest,
  notUnique,
  registerError,
  registerSuccessful,
  loginError,
  loginSuccessful,
  authorizatioError,
  tokenInvalid,
  updateError,
  updateSuccessful,
  internalServerError,
  pageNotFound
};
