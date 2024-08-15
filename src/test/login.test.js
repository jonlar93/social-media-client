
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
  
  describe("storage", () => {
    it("Saves an array to storage", () => {
      const key = "test";
      const value = ["testName", "testPassword"];
      const serializedValue = JSON.stringify(value);
      save(key, value);
      expect(localStorage.getItem(key)).toEqual(serializedValue);
    });
  
    it("Loads an array from storage", () => {
      const key = "test";
      const value = ["testName", "testPassword"];
      save(key, value);
      expect(load(key)).toEqual(value);
    });
  
    it("Removes an array from storage", () => {
      const key = "test";
      const value = ["testName", "testPassword"];
      save(key, value);
      expect(load(key)).toEqual(value);
      remove(key);
      expect(load(key)).toEqual(null);
    });
  });
  
  const TEST_EMAIL = "somemail@stud.noroff.no";
  const TEST_PASSWORD = "heiheihei";
  const TEST_BAD_EMAIL = "jonas@noroff.no";
  
  const TEST_TOKEN = {
    token: "I1iIsInR5cCI6IkXVCJ9.yJpCeyJhbGiOJIUzI6ND",
  };
  

  
  function fetchSuccess(email = TEST_EMAIL, password = TEST_PASSWORD) {
    return Promise.resolve({
      ok: true,
      status: 200,
      statusText: "OK",
      json: () => Promise.resolve(TEST_TOKEN),
    });
  }
  

  function fetchFailure(status = 404, statusText = "failed to login") {
    return Promise.resolve({
      ok: false,
      status,
      statusText,
    });
  }
  
  describe("logInSucces", () => {
    it("Fetches and stores a token in browser storage when provided with a valid credentials ", async () => {
      global.fetch = jest.fn(() => fetchSuccess());
      const token = await login();
      expect(token).toEqual(TEST_TOKEN);
    });
  });

  describe("logInFail", () => {
    it("fetches with wrong credentials and is denied access ", async () => {
      global.fetch = jest.fn(() => fetchFailure());
      await expect(login()).rejects.toThrow("failed to login")
    });
  });

