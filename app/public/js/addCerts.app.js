var addCertificateApp = new Vue({
  el: '#addCertForm',
  data: {
    currentCertificate: {},
    message: ""
  },
  methods: {
    addCertificate(){
      console.log('reached here');
      fetch('api/certificates/post.php', {
        method:'POST',
        body: JSON.stringify(this.currentCertificate),
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
  },
  created() {
  }
});
