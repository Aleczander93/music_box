(function() {
  angular.module('mean-albums')
  .controller('MainController', MainController);

  MainController.$inject = ['$scope', "AlbumService"];

  function MainController($scope, AlbumService){
    $scope.albums = AlbumService.get();
    $scope.createAlbum = createAlbum;
    $scope.editAlbum = editAlbum;
    $scope.saveAlbum = saveAlbum;
    $scope.deleteAlbum = deleteAlbum;

    $scope.$watch(function(){
      return AlbumService.get();
    }, function(){
      $scope.albums = AlbumService.get();
    });

    function createAlbum(newAlbum){
    AlbumService.create(newAlbum);
    $scope.newAlbum = '';
    }

    function editAlbum(album){
      album.isBeingEdited = true;
    }

    function saveAlbum(index, album){
      AlbumService.update(index, album);
      album.isBeingEdited = false;
    }

    function deleteAlbum(index, album){
      AlbumService.delete(index, album);
    }

  }
}());
