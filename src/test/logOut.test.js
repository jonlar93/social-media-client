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
  



  describe("logOut", () => {
    it("Logout function clears the token from storage ", () => {
      localStorage.setItem("token", TEST_TOKEN.token)
      logout();
      expect(localStorage.getItem("token")).toBeNull();
    });
  });