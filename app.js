angular.module('meme_clicker', []) 
	.controller('mainController', function($scope, $interval) {
		var vm = this;
		vm.message = "Test message!";
		vm.cookies = 0;
		vm.cursors = 0;
		vm.cursorCost = 10;

		vm.cookieClick = function(number) {
			vm.cookies = vm.cookies + number;
		};

		vm.buyCursor = function() {
			if (vm.cookies >= vm.cursorCost) {
				vm.cursors += 1;
				vm.cookies = vm.cookies - vm.cursorCost;
			};
			vm.cursorCost = Math.floor(10 * Math.pow(1.1, vm.cursors));
		};

		$interval(cookieClick(cursors), 1000);

		return vm;
	});