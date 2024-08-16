
import { login } from "../js/api/auth/login"
import { save, remove, load } from "../js/storage"


class LocalStorageMock {
    constructor() {
      this.store = {};
    }
  
    clear() {
      this.store = {};
    }
  
    getItem(key) {
      return this.store[key] || null;
    }
  
    setItem(key, value) {
      this.store[key] = String(value);
    }
  
    removeItem(key) {
      delete this.store[key];
    }
  }
  
  global.localStorage = new LocalStorageMock();
  
  
  const TEST_EMAIL = "somemail@stud.noroff.no";
  const TEST_PASSWORD = "heiheihei";
  const TEST_TOKEN = {
    token: "I1iIsInR5cCI6IkXVCJ9.yJpCeyJhbGiOJIUzI6ND",
  };

  const responseMock = {
    name: "username",
    email: "somemail@stud.noroff.no",
    accessToken: "I1iIsInR5cCI6IkXVCJ9.yJpCeyJhbGiOJIUzI6ND"
  }
  

  
  function fetchSuccess() {
    return Promise.resolve({
      ok: true,
      status: 200,
      statusText: "OK",
      json: () => Promise.resolve(responseMock),
    });
  }
  

  function fetchFailure(status = 404, statusText = "failed to login") {
    return Promise.resolve({
      ok: false,
      status,
      statusText,
    });
  }
  
 describe("logInSucces", () =>{
    it("Fetches and stores a token in browser storage when provided with a valid credentials ", async () => {
      global.fetch = jest.fn(() => fetchSuccess());
      await login(TEST_EMAIL, TEST_PASSWORD);
      const token = JSON.parse(localStorage.getItem("token"));
      expect(token).toEqual(TEST_TOKEN.token);
    });
  });

  describe("logInFail", () => {
    it("fetches with wrong credentials and is denied access ", async () => {
      global.fetch = jest.fn(() => fetchFailure());
      await expect(login("mail@wrong.com", "wrongPassword")).rejects.toThrow("failed to login")
    });
  });

