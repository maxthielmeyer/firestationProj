var personRecordsApp = new Vue({
  el: '#memberInfo',
  data: {
    persons: [],
    currentPerson: {},
    gender:''
  },
  methods: {
    fetchPersons() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { personRecordsApp.persons = json; this.setCurrentPerson()});
    },
    setCurrentPerson(){
      var paramIndex = document.location.href.lastIndexOf('=');
      var currentPersonId = document.location.href.substring(paramIndex+1);
      for(var person of this.persons){
        if(person.personId == currentPersonId){
          this.currentPerson = person;
        }
      }
    },
    savePerson(){
      console.log(this.currentPerson.gender);
      fetch('api/memberById/post.php', {
        method:'POST',
        body: JSON.stringify(this.currentPerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })
    }
  },
  created() {
    this.fetchPersons();
  }
});
