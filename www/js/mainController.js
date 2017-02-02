app.controller("mainController", function($scope, $cordovaSQLite, $cordovaPrinter) {
 	$scope.line = {};
    $scope.line.labels = ["January", "February", "March", "April", "May", "June", "July"];
	$scope.line.series = ['Series A', 'Series B'];
	$scope.line.data = [
	  [65, 59, 80, 81, 56, 55, 40],
	  [28, 48, 40, 19, 86, 27, 90]
	];
	$scope.onClick = function (points, evt) {
	  console.log(points, evt);
	};
	$scope.line.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	$scope.line.options = {
	  scales: {
	    yAxes: [
	      {
	        id: 'y-axis-1',
	        type: 'linear',
	        display: true,
	        position: 'left'
	      },
	      {
	        id: 'y-axis-2',
	        type: 'linear',
	        display: true,
	        position: 'right'
	      }
	    ]
	  }
	};
	$scope.bar = {};
	$scope.bar.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	$scope.bar.series = ['Series A', 'Series B'];

	$scope.bar.data = [
	  [65, 59, 80, 81, 56, 55, 40],
	  [28, 48, 40, 19, 86, 27, 90]
	];

	$scope.doughnut= {};
	$scope.doughnut.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  	$scope.doughnut.data = [300, 500, 100];

  	$scope.insert = function(username, password){
  		alert("insert data");
  		var query = "INSERT into user(username, password) values(?,?)";

  		$cordovaSQLite.execute(db, query, [username, password]).then(function(res){
  			console.log("INSERT ID -> " + res.insertId);
      		alert(res.insertId);
  		},function(err){
  			console.log(err);
  			alert(err);
  		})
  	};

  	$scope.print = function() {
        if($cordovaPrinter.isAvailable()) {
            $cordovaPrinter.print("https://joko25.github.io/");
        } else {
            alert("Printing is not available on device");
        }
    };
});