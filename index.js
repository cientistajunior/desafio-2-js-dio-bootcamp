function nivel(vitoria, derrota) {
  let saldoVitoria = vitoria - derrota
  if(saldoVitoria < 10) {
    return 'ferro'
  } else if( saldoVitoria >= 11 && saldoVitoria <= 20) {
    return 'Bonze'
  } else if( saldoVitoria >= 21 && saldoVitoria <= 50) {
    return 'Prata'
  } else if( saldoVitoria >= 51 && saldoVitoria <= 80) {
    return 'Ouro'
  } else if( saldoVitoria >= 81 && saldoVitoria <= 90) {
    return 'Diamante'
  } else if( saldoVitoria >= 91 && saldoVitoria <= 100) {
    return 'Lendário'
  } else if( saldoVitoria >= 101) {
    return 'Imortal'
  }
}

function saldoVitorial(vitoria, derrota) {
  return vitoria - derrota
}

function main(){

  return `O Herói tem de saldo de ${saldoVitorial(1000,90)} está no nível de ${nivel(1000,90)} `

}

console.log(main())
