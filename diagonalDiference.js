<htmt>
    <head>
    <script type = "text/javascript" >
	let arr = [
			[11, 2, 4],
			[4, 5, 6],
			[10, 8, -12]
		];
			var output = DiagonalDifference(arr);
			console.log(output);
	  
		function DiagonalDifference(arr) {
			//declaracion de las variables 
			var diagonal1 = 0;
			var diagonal2 = 0;
			//recorre la matriz
			for (var i = 0; i < arr.length; i++) {
				for (var j = 0; j < arr.length; j++) {
				  //sumatoria de la diagonal 1
					if (i == j) {
						diagonal1 = diagonal1 + arr[i][j];
					}
					//sumatoria de la diagonal 2 
					if (i + j == arr.length - 1) {
						diagonal2 = diagonal2 + arr[i][j];
					}
				}
			}

		var respuesta1 = "el valor de la suma de la diagonal 1 es: " + diagonal1;
		var respuesta2 = "el valor de la suma de la diagonal 2 es: " + diagonal2;
		return respuesta1 + "\n" + respuesta2;
		} 
	</script> 
	</head>
</html>