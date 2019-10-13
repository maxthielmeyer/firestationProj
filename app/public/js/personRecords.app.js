var personRecordsApp = new Vue({
  el: '#middle',
  data: {
    persons: [],
    activePersons: []
  },
  methods: {
    fetchPersons() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { personRecordsApp.persons = json });
    },
    setActivePersons(){
      console.log(this.persons.length);
      for(var person in this.persons){
        if(person.isActive == 1){
          console.log(person);
          this.activePersons.push(person);
        }
      }
    }
  },
  created() {
    this.fetchPersons();
  }
});
