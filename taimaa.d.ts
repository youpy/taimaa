declare module "taimaa" {
  export default class Timer {
    constructor(ac: AudioContext);
    setTimeout(callback: () => void, ms: number): number;
    clearTimeout(timeoutId: number | undefined): void;
    setInterval(callback: () => void, ms: number): number;
    clearInterval(intervalId: number | undefined): void;
  }
}
