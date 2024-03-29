var certsApp = new Vue({
  el: '#certInfo',
  data: {
    certs: [],
    currentCert: {},
    allJoins: [],
    holdingMembers: [],
    //adding filtering features
    filterCert: '',
    filterUsers: '',
    oldcName:'',
    certification:'',
    valid:''
  },
  methods: {
    fetchCerts() {
      fetch('api/certificates/index.php')
      .then(response => response.json())
      .then(json => { certsApp.certs = json; this.setCurrentCert()});
    },
    setCurrentCert(){
      var paramIndex = document.location.href.lastIndexOf('=');
      var currentCertId = document.location.href.substring(paramIndex+1);

      //have to a add a line to deal with %20s in URL substring
      currentCertId = currentCertId.replace(/%20/g," ");
      for(var cert of this.certs){
        if(cert.cName == currentCertId){
          this.currentCert = cert;
          this.oldcName=cert.cName;
        }
      }
      // this.getMemberCerts(currentPersonId)
    },

    //get all Certifications in user_cert table
    getMemberCerts(){
      fetch('api/certificates/certJoin.php')
      .then(response => response.json())
      .then(json => { certsApp.allJoins = json;})
      .then(
        function(){
        var paramIndex = document.location.href.lastIndexOf('=');
        var currentCertId = document.location.href.substring(paramIndex+1);
        for(var join of certsApp.allJoins){
          if(currentCertId == join.cName) certsApp.holdingMembers.push(join);
        }
      });
    },

    //find the right certs based on our user
    setUsers(){
      var paramIndex = document.location.href.lastIndexOf('=');
      var certName = document.location.href.substring(paramIndex+1);

      //have to a add a line to deal with %20s in URL substring
      currentCertId = currentCertId.replace(/%20/g," ");

      for(var join of this.allJoins){
        if(certName == join.cName) certsApp.holdingMembers.push(join);
      }
      console.log(this.allJoins)
    },
    saveCert(){
      console.log(this.oldcName);
      this.currentCert.oldcName = this.oldcName;
      fetch('api/certificates/updateCert.php', {
        method:'POST',
        body: JSON.stringify(this.currentCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })
      window.location.replace("./certs.html");
    },
    deleteCert(){
      var result = confirm("Are you sure you want to delete?");
      if(result){
        fetch('api/certificates/deleteCert.php', {
          method:'POST',
          body: JSON.stringify(this.currentCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => {response.json();  window.location.replace("./index.html")})
        .catch( err => {
          console.error('RECORD POST ERROR:');
          console.error(err);
        })
      }
    }
  },
  created() {
    this.fetchCerts();
    this.getMemberCerts();
    // this.getAllCerts();
    // this.getPhoneNums();
  }
});
