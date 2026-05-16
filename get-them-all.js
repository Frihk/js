export const getArchitects = () => {
  const theArc = Array.from(document.getElementsByTagName('a'))
  const theNonArc = Array.from(document.querySelectorAll('body *:not(a)'))
  return [theArc, theNonArc]
}

export const getClassical = () => {
  const witha = Array.from(document.querySelectorAll('a.classical'))
  const withouta = Array.from(document.querySelectorAll('a:not(.classical)'))
  return [witha, withouta]
}

export const getActive = () => {
  const active = Array.from(document.querySelectorAll('a.classical.active'))
  const nonactive = Array.from(document.querySelectorAll('a.classical:not(.active)'))
  return [active, nonactive]
}

export const getBonannoPisano = () => {
  const fir = document.getElementById('BonannoPisano')
  const sec = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'))
  return [fir, sec]
}