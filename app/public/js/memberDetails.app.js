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
    currentUserCert:{},
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
      this.getMemberCerts();
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
      window.location.replace("./index.html");
    },
    addMember(){
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
    deleteMember(){
      var result = confirm("Are you sure you want to delete?");
      if(result){
        fetch('api/memberById/delete.php', {
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
        persons=null;
        console.log('reached here');
        window.location.replace("./index.html");
      }
    },
    getAllCerts(){
      fetch('api/certificates/index.php')
      .then(response => response.json())
      .then(json => { personRecordsApp.allCerts = json;})
    },

    //get all Certifications in user_cert table
    getMemberCerts(){
      console.log('reached here');
      fetch('api/memberById/certs.php')
      .then(response => response.json())
      .then(json => { personRecordsApp.assignedCerts = json; this.setCurrentCerts();}) //Addy changed to ensure sequential flow of execution
    },

    //find the right certs based on our user
    setCurrentCerts(){
      console.log(this.assignedCerts);
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
    },
    addCertForPerson(){
      this.currentUserCert.personId=this.currentPerson.personId;
      console.log(this.currentUserCert);
      fetch('api/memberById/postNewUserCert.php', {
        method:'POST',
        body: JSON.stringify(this.currentUserCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })
      window.location.replace("./viewMember.html?id="+this.currentPerson.personId);
    }
  },
  created() {
    this.fetchPersons();
    this.getAllCerts();
    this.getPhoneNums();
  }
});
