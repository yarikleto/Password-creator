const compose = (...fns) => arg => (
  fns.reduceRight(
    (acc, fn) => fn(acc),
    arg
  )
);

export default compose;