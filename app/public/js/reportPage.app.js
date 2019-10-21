var certsApp = new Vue({
  el: '#certInfo',
  data: {
    certs: [],
    currentCert: {},
    allJoins: [],
    holdingMembers: [],
    persons: [],
    //adding filtering features
    filterCert:'all' ,
    filterUsers: 'all',
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
    expireCheck(cDate){
      if(new Date(cDate) <= new Date()) return "true";
      else return "false";
    },

    //get all Certifications in user_cert table
    getMemberCerts(){
      fetch('api/certificates/certJoin.php')
      .then(response => response.json())
      .then(json => { certsApp.allJoins = json;});
    }

  },
  created() {
    this.fetchCerts();
    this.getMemberCerts();
  }
});
