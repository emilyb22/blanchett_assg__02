angular
	.module('contactsApp', ['firebase'])
    .constant('firebaseConfig', {
        apiKey: "AIzaSyCxAZP1XoJbqjpZxkwMclwYPRozaFth8qw",
    authDomain: "fir-demo-fda4d.firebaseapp.com",
    databaseURL: "https://fir-demo-fda4d.firebaseio.com",
    projectId: "fir-demo-fda4d",
    storageBucket: "fir-demo-fda4d.appspot.com",
    messagingSenderId: "209743316027"  
})
.run(firebaseConfig => firebase.initializeApp(firebaseConfig))
.controller('toDoCtrl', function($scope, $firebaseObject, $firebaseArray){
	const dbRef = firebase.database().ref().child('todos')
    
    $scope.todoList = $firebaseArray(dbRef)
    
    $scope.todo = $firebaseObject(dbRef.child('-KoO9a3E2avl-qdnxNU7'))
    
    this.getBlankTodo = () => ({
        title:'',
        dueDate: '',
        phone: '',
        email: '',
        birthday: '',
        isCompleted: false
    })
    
    $scope.newTodo = this.getBlankTodo()
    
    $scope.addTodo = () => {
        $scope.todoList.$add($scope.newTodo)
        $scope.newTodo = this.getBlankTodo()
    }
    
    $scope.saveTodo = todo => $scope.todoList.$save(todo)
    
    $scope.removeTodo = todo => {
        if(confirm("Are you sure you want to delete this contact?")){
    $scope.todoList.$remove(todo)
        }
    }
    
    
})


