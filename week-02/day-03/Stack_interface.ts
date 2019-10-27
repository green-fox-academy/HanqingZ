export interface stack_interface {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}