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
    isNewMember: false,
    addingNum:"",
    userNum:{}
  },
  methods: {
    savePerson(){
      console.log(this.currentPerson.isActive);
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
      window.location.replace("./index.html");
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
