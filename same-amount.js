function sameAmount(arg, reg1, reg2) {
  const makeGlobal = r => new RegExp(r.source, r.flags.includes('g') ? r.flags : r.flags + 'g');
  let check1 = arg.match(makeGlobal(reg1)) ?? [];
  let check2 = arg.match(makeGlobal(reg2)) ?? [];
  if (check1.length === 0 && check2.length === 0) return false;
  return check1.length === check2.length;
}