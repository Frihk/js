const flags = (arg) => {
  const hasHelp = 'help' in arg;

  const alias = { h: 'help' };
  for (const Key in arg) {
    if (Key === 'help') continue;
    alias[Key[0]] = Key;
  }

  const flagsToDescribe = hasHelp ? arg.help : Object.keys(arg);

  const description = flagsToDescribe
    .filter(Key => Key !== 'help' && arg[Key])
    .map(Key => `-${Key[0]}, --${Key}: ${arg[Key]}`)
    .join('\n');

  const newob = { alias, description };
  return newob;
}
