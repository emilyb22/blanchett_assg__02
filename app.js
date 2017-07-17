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
.controller('contactsCtrl', function($scope, $firebaseObject, $firebaseArray){
	const dbRef = firebase.database().ref().child('contacts')
    
    $scope.contactList = $firebaseArray(dbRef)
    
    $scope.contact = $firebaseObject(dbRef.child('-KoO9a3E2avl-qdnxNU7'))
    
    this.getBlankContact = () => ({
        fname:'',
        lname: '',
        phone: '',
        email: '',
        birthday: '',
        isCompleted: false
    })
    
    $scope.newContact = this.getBlankContact()
    
    $scope.addContact = () => {
        $scope.contactList.$add($scope.newContact)
        $scope.newContact = this.getBlankContact()
    }
    
    $scope.saveContact = contact => $scope.contactList.$save(contact)
    
    $scope.removeContact = contact => {
        if(confirm("Are you sure you want to delete this contact?")){
    $scope.contactList.$remove(contact)
        }
    }
    
    
})


