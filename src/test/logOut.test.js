import { logout } from "../js/api/auth/logout";
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


  const TEST_TOKEN = {
    token: "I1iIsInR5cCI6IkXVCJ9.yJpCeyJhbGiOJIUzI6ND",
  };
  



  describe("storage", () => {
    it("Removes an array from storage", () => {
      const key = "test";
      const value = ["testName", "testPassword"];
      save(key, value);
      expect(load(key)).toEqual(value);
      remove(key);
      expect(load(key)).toEqual(null);
    });
  });


  describe("logOut", () => {
    it("Logout function clears the token from storage ", async () => {
      localStorage.setItem("token", TEST_TOKEN.token)
      const token = await logout();
      expect(token).toEqual(undefined);
    });
  });