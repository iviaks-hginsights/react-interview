import { Data, TestFunction } from "./models/data";

const testFunction: TestFunction = (int) => [int, int];

export const data: Data[] = [
  {
    distance: 1, // always a number
    name: "abc", // always a string
    direction: "North", // always one of the 4 cardinal directions
    isMild: false, // Optional param, either undefined, true, or false
    utils: {
      secretData: "def", // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
  {
    distance: 100, // always a number
    name: "abcd", // always a string
    direction: "South", // always one of the 4 cardinal directions
    utils: {
      secretData: 123, // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
  {
    distance: 7, // always a number
    name: "pancake", // always a string
    direction: "West", // always one of the 4 cardinal directions
    isMild: true, // Optional param, either undefined, true, or false
    utils: {
      secretData: "seven", // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
  {
    distance: -1, // always a number
    name: "a string", // always a string
    direction: "East", // always one of the 4 cardinal directions
    isMild: false, // Optional param, either undefined, true, or false
    utils: {
      secretData: "def", // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
  {
    distance: 1000, // always a number
    name: "abc", // always a string
    direction: "North", // always one of the 4 cardinal directions
    utils: {
      secretData: "def", // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
  {
    distance: 50, // always a number
    name: "123", // always a string
    direction: "West", // always one of the 4 cardinal directions
    isMild: true, // Optional param, either undefined, true, or false
    utils: {
      secretData: "def", // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
  {
    distance: 72, // always a number
    name: "abc", // always a string
    direction: "South", // always one of the 4 cardinal directions
    isMild: false, // Optional param, either undefined, true, or false
    utils: {
      secretData: "def", // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
  {
    distance: -100, // always a number
    name: "abc", // always a string
    direction: "East", // always one of the 4 cardinal directions
    utils: {
      secretData: "def", // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
  {
    distance: 21, // always a number
    name: "abc", // always a string
    direction: "East", // always one of the 4 cardinal directions
    isMild: true, // Optional param, either undefined, true, or false
    utils: {
      secretData: "def", // can be any type
      secretFn: testFunction, // function that takes an number returns an array containing that number twice
    },
  },
];
