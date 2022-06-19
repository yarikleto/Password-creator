export const compose = (...fns) => arg => (
  fns.reduceRight(
    (acc, fn) => fn(acc),
    arg
  )
);
