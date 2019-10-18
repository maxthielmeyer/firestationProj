var personRecordsApp = new Vue({
  el: '#middle',
  data: {
    persons: [],
    activePersons: [],
    inactivePersons: []
  },
  methods: {
    fetchPersons() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { personRecordsApp.persons = json; this.setActivePersons()});
    },
    setActivePersons(){
      for(var person of this.persons){
        if(person.isActive){
          this.activePersons.push(person);
        }
        else{
          this.inactivePersons.push(person);
        }
      }
    }
  },
  created() {
    this.fetchPersons();
  }
});
