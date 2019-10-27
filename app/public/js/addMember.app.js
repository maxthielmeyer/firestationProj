var personRecordsApp = new Vue({
  el: '#memberInfo',
  data: {
    currentPerson: {},
    warning: ""
  },
  methods: {
    validateForm(){
      this.warning = ""
      if(!this.currentPerson.firstName){
        this.warning = this.warning.concat(" First name is required.");
      }
      if(!this.currentPerson.lastName){
        this.warning = this.warning.concat(" Last name is required.");
      }
      if(!this.currentPerson.radioNum){
        this.warning = this.warning.concat(" Radio Number is required.");
      }
      if(!this.currentPerson.stationNumber){
        this.warning = this.warning.concat(" Station Number is required.");
      }
      if(!this.currentPerson.DOB){
        this.warning = this.warning.concat(" Date of Birth is required.");
      }
      if(!this.currentPerson.gender){
        this.warning = this.warning.concat(" Gender is required.");
      }
      if(!this.currentPerson.isActive){
        this.warning = this.warning.concat(" Active is required.");
      }
      if(!this.currentPerson.address){
        this.warning = this.warning.concat(" Address is required.");
      }
      if(!this.currentPerson.email){
        this.warning = this.warning.concat(" Email is required.");
      }
      if(this.warning.length > 0 ) alert(this.warning)
      else this.savePerson()
    },

    savePerson(){
      console.log(this.currentPerson.isActive);
        fetch('api/memberById/postNew.php', {
          method:'POST',
          body: JSON.stringify(this.currentPerson),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => {response.json();  window.location.replace("./index.html")})
        .catch( err => {
          console.error('RECORD POST ERROR:');
          console.error(err);
        })
    },

    postNumber(personId){
      console.log(this.addingNum);
      console.log(personId);
      this.userNum.phoneNum=this.addingNum;
      this.userNum.personId=personId;
      console.log(this.userNum);
      fetch('api/memberById/addPhone.php',{
        method:'POST',
        body: JSON.stringify(this.userNum),
        headers:{
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
  }
});
