import Vue from "vue";
import axios from "axios";

const Plugin = {};

Plugin.install = (Vue, options) => {
  const defaultOptions = {
    instance: {
      baseURL: process.env.VUE_APP_API_BASE_URI,
      timeout: 1000 * 10
    },
    interceptor: {
      request: {
        handle: config => config,
        error: error => Promise.reject(error)
      },
      response: {
        handle: response => response,
        error: error => Promise.reject(error)
      }
    }
  };

  const { instance, interceptor } = {
    ...defaultOptions,
    ...options
  };

  const _axios = axios.create(instance);

  _axios.interceptors.request.use(
    config => interceptor.request.handle(config),
    error => interceptor.request.error(error)
  );

  _axios.interceptors.response.use(
    response => interceptor.response.handle(response),
    error => interceptor.response.error(error)
  );

  Vue.axios = _axios;
  Vue.prototype.$axios = _axios;
};

Vue.use(Plugin);

export default Plugin;
