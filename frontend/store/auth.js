export const state = () => ({
  authenticated: false
});

export const mutations = {
  login(state) {
    authenticated: true;
  },
  logout(state) {
    authenticated: false;
  }
};
