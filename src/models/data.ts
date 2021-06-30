export interface TestFunction {
  <T>(value: T): [T, T];
}

export interface DataUtils {
  secretData?: any;
  secretFn: TestFunction;
}

export const Direction = {
  North: "North",
  South: "South",
  West: "West",
  East: "East",
};

export interface Data {
  distance: number; // always a number
  name: string; // always a string
  direction: keyof typeof Direction;
  isMild?: boolean; // Optional param, either undefined, true, or false
  utils?: DataUtils;
}
