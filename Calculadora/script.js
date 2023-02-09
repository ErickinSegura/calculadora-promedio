function calcular() {
  var blq1 = parseFloat(document.getElementById("blq1").value);
  var blq2 = parseFloat(document.getElementById("blq2").value);
  var blq3 = parseFloat(document.getElementById("blq3").value);

  var UDF1 = parseFloat(document.getElementById("UDF1").value);
  var UDF2 = parseFloat(document.getElementById("UDF2").value);
  var UDF3 = parseFloat(document.getElementById("UDF3").value);
  var UDF4 = parseFloat(document.getElementById("UDF4").value);

  var opta = parseFloat(document.getElementById("opta").value);



  var resultado = document.getElementById("resultado");
  resultado.value = ((blq1*3)+(blq2*3)+(blq3*3)+(UDF1)+(UDF2)+(UDF3*2)+(UDF4*2)+(opta*3)) / 18;
}
