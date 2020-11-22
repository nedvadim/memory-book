import store from "../store";
export function getAuthData() {
  const state = store.getState();
  const token = state.auth.token;
  const userId = state.auth.userId;
  const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
  return {token, userId, queryParams};
}
