class UrlConstant {
  constructor() {}
  url_dev = 'https://interviewtesting.onrender.com/v1';

  // user api
  users = 'users';
  empList = `${this.url_dev}/${this.users}/employee/list`;
  singleEmp = `${this.url_dev}/${this.users}/employee`;
  empDelete = `${this.url_dev}/${this.users}/employee-remove`;
  empEdit = `${this.url_dev}/${this.users}/employee-update`;  
}

const urls = new UrlConstant();
export default urls;
