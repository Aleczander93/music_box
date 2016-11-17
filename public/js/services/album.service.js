(function() {
  angular.module('mean-albums')
    .factory('AlbumService', AlbumService);

  AlbumService.$inject = ['$http'];

  function AlbumService($http){
    init();
    var albums = [];
    return {
      get: getAllAlbums,
      create: createOneAlbum,
      update: updateOneAlbum,
      delete: deleteOneAlbum
    };

    function init(){
      $http.get('/albums')
      .then(function(response){
        albums = response.data.albums;
      })
      .catch(function(err){
        console.log(err);
      });
    }

    function getAllAlbums(){
      return albums;
    }

    function createOneAlbum(album){
      $http.post('/albums', album)
      .then(function(response){
        albums.push(album);
      })
      .catch(function(err){
        console.log(err);
      });
    }

    function updateOneAlbum(index, updateAlbum){
      $http.put('/albums/' + updateAlbum._id, updateAlbum)
      .then(function(response){
        albums.splice(index, 1, updateAlbum);
      })
      .catch(function(err){
        console.log(err);
      });
    }

    function deleteOneAlbum(index, deletedAlbum){

      $http.delete('/albums/' + deletedAlbum._id)
      .then(function(){
        albums.splice(index, 1);
      })
      .catch(function(err){
        console.log(err);
      });
    }

  }
}());
