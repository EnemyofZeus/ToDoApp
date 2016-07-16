angular.module('toDo').controller('mainCtrl', function($scope, mainServ){
  $scope.test = "Hey you!"
  $scope.add = false;

  $scope.newTodo=function(desc){
    var todo = {
      description:desc
    };
    mainServ.newTodo(todo)
    .then(function(res){
      $scope.getTodos();
      console.log(res);
    })
  };
  $scope.getTodos=function(){
    mainServ.getTodos()
    .then(function(res){
      $scope.todos = res;
      console.log(res);
    })
  }
  $scope.updateTodo=function(id){
    mainServ.updateTodo()
    
  };
  $scope.getTodo=function(id){
    mainServ.getTodo()
    .then(function(res){

    })
  };
  $scope.killTodo=function(id){
    mainServ.killTodo(id)
  }
  $scope.todos = $scope.getTodos();
})
