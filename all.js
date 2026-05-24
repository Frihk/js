const all = (obj) => {
  const entries = Object.entries(obj);

  const resolvedEntries = entries.map(([key, value]) => 
    Promise.resolve(value).then((resolved) => [key, resolved])
  );

  return Promise.all(resolvedEntries).then(Object.fromEntries);
};

