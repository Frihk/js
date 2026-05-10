function sameAmount(arg, reg1, reg2) {
   let check1 = arg.match(reg1) ?? []
   let check2 = arg.match(reg2) ?? []
     if (check1.length === 0 && check2.length === 0) {
      return false
   }
   return check1.length === check2.length
}
