var personRecordsApp = new Vue({
  el: '#memberInfo',
  data: {
    persons: [],
    currentPerson: {}
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
          console.log(person);
        }
      }
    }
  },
  created() {
    this.fetchPersons();
  }
});
