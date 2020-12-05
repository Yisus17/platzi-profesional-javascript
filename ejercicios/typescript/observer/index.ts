//Para entender este patron, el mejor ejemplo es un newsletter

//subscripcion y desubscripcion

interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector("#value"); //buscamos el input
    el.addEventListener("input", () => {
      this.notify(el.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex((obs) => {
      return obs === observer;
    });
    this.observers.splice(index, 1); //lo sacamos de la lista
  }

  notify(data: any) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;

  constructor() {
    this.el = document.querySelector("#price");
  }
  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => {
  value.unsubscribe(display); //nos desuscribimos en 5 segundos
  console.log("chau")
}, 5000);
