interface Dabe<T> {
  setItem(key: string, value: T): void;
  getItem(key: string): T | null;
}

class LocalStorage<T> implements Dabe<T> {
  setItem(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.setItem("name", "Alice");

const numberStorage = new LocalStorage<number>();
numberStorage.setItem("age", 25);
