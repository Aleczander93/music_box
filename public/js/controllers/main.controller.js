(function() {
  angular.modules('album-app')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', AlbumService];

  function MainController($scope, AlbumService){
    $scope.albums = AlbumService.get();
    $scope.createAlbum = createAlbum;

    $scope.$watch(function(){
      return AlbumService.get();
    }, function(){
      $scope.albums= AlbumService.get();
    });

    function createAlbum(newAlbum){
    AlbumService.create(newAlbum);
    $scope.newAlbum = '';
    }

  }
}());
