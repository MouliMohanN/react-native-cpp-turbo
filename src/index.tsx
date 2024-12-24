import CppTurbo from './NativeCppTurbo';

export function multiply(a: number, b: number): number {
  return CppTurbo.multiply(a, b);
}
