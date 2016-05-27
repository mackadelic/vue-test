const TASK_API_URL = 'api/users';

export default {
  getUsers(context) {
    return context.$http.get(TASK_API_URL)
      .then(function(response) {
        return response.data;
      });
  }
}
