var personRecordsApp = new Vue({
  el: '#memberInfo',
  data: {
    persons: [],
    currentPerson: {},
    gender:'',
    assignedCerts: [],
    userCerts: [],
    allCerts: [],
    phoneNums: [],
    userNums:[],
    isNewMember: false
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
          console.log(this.currentPerson);
        }
      }
      this.getMemberCerts(currentPersonId)
    },

    savePerson(){
      console.log(this.currentPerson.isActive);
      if(!this.isNewMember){
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
      else{
        fetch('api/memberById/postNew.php', {
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
    addMember(){
      console.log('reached here')
      this.isNewMember=true;
      this.resetCurrentPerson();
    },
    resetCurrentPerson(){
      this.currentPerson = {
        firstName: '',
        lastName: '',
        radioNum: '',
        stationNumber: '',
        personId: '',
        DOB: '',
        gender: '',
        address: '',
        email: '',
      }
    },
    getAllCerts(){
      fetch('api/certificates')
      .then(response => response.json())
      .then(json => { personRecordsApp.allCerts = json;})
    },

    //get all Certifications in user_cert table
    getMemberCerts(){
      fetch('api/memberById/certs.php')
      .then(response => response.json())
      .then(json => { personRecordsApp.assignedCerts = json;})
      .then(this.setCurrentCerts());
    },

    //find the right certs based on our user
    setCurrentCerts(){
      var paramIndex = document.location.href.lastIndexOf('=');
      var currentPersonId = document.location.href.substring(paramIndex+1);
      for(var cert of this.assignedCerts){
        if(cert.personId == currentPersonId) this.userCerts.push(cert);
      }
      console.log(this.userCerts)
    },

    getPhoneNums(){
      fetch('api/memberById/numbers.php')
      .then(response => response.json())
      .then(json => { personRecordsApp.phoneNums = json; this.getMemberNums()})
    },

    getMemberNums(){
      var paramIndex = document.location.href.lastIndexOf('=');
      var currentPersonId = document.location.href.substring(paramIndex+1);
      for(var num of this.phoneNums){
        if(num.personId == currentPersonId){
          this.userNums.push(num);
          console.log(this.userNums);
        }
      }
    }
  },
  created() {
    this.fetchPersons();
    this.getMemberCerts();
    this.getAllCerts();
    this.getPhoneNums();
  }
});
