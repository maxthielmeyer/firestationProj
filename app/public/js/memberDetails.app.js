var personRecordsApp = new Vue({
  el: '#memberInfo',
  data: {
    persons: [],
    currentPerson: {},
    gender:'',
    certs: [],
    userCerts: []
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
      this.getMemberCerts(currentPersonId)
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
    },

    getMemberCerts(){
      fetch('api/memberById/certs.php')
      .then(response => response.json())
      .then(json => { personRecordsApp.certs = json;})
      .then(this.setCurrentCerts());
    },
    setCurrentCerts(){
      var paramIndex = document.location.href.lastIndexOf('=');
      var currentPersonId = document.location.href.substring(paramIndex+1);
      for(var cert of this.certs){
        if(cert.personId == currentPersonId) this.userCerts.push(cert);
      }
      console.log(this.userCerts)
    }
  },
  created() {
    this.fetchPersons();
    this.getMemberCerts();
  }
});
