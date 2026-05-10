function sameAmount(arg, reg1, reg2) {
   let check1 = arg.match(reg1) ?? []
   let check2 = arg.match(reg2) ?? []
   return check1.length === check2.length
}
