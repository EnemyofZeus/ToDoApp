angular.module('toDo').service('mainServ', function($http){
  this.newTodo=function(todo){
    return $http({
      method:'POST',
      url:'/todo',
      data: todo
    }).then(function(res){
      return res;
    })
  };
  this.getTodos=function(){
    return $http({
      method:'GET',
      url:'/todo'
    }).then(function(res){
      return res.data;
    });
  };
  this.killTodo=function(id){
    return $http({
      method:'DELETE',
      url:'/todo/' +id
    }).then(function(res){
      return res;
    });
  };

})
