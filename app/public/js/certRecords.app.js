var certificateApp = new Vue({
  el: '#certList',
  data: {
    certificates: []
  },
  methods: {
    fetchCertificates() {
      fetch('api/certificates/')
      .then(response => response.json())
      .then(json => { certificateApp.certificates = json;});
    },
  },
  created() {
    this.fetchCertificates();
  }
});
