export let title: string = "Hallo Leute";

export let foo: string | null = null;

$: if (foo !== null) {
  // Condition may become valid at runtime, but typescript compilerOptions
  // "strictNullChecks": true will complain unless you explicitly cast
  console.log("String length: " + (foo as string).length);
}

export const some: Some = {
  a: 1,
  b: "3",
  c: "three",
  d: new Date(),
};

interface Some {
  a: 1;
  b: "3";
  c: string;
  d: Date;
}
