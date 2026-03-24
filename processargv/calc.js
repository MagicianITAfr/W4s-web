//somma
if (process.argv[3] === "som") {
  console.log(Number(process.argv[2]) + Number(process.argv[4]));
}
//sottrazione
else if (process.argv[3] === "sot") {
  console.log(Number(process.argv[2]) - Number(process.argv[4]));
}
//moltiplicazione
else if (process.argv[3] === "mol") {
  console.log(Number(process.argv[2]) * Number(process.argv[4]));
}
//divisione
else if (process.argv[3] === "div") {
	if(process.argv[4] == 0){
	console.log("divisione per 0")
	}
  else{
  console.log(Number(process.argv[2]) / Number(process.argv[4]));
}
}
