var personRecordsApp = new Vue({
  el: '#middle',
  data: {
    persons: [],
  },
  methods: {
    fetchPatients() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { personRecordsApp.persons = json })
    }
  },
  created() {
    this.fetchPatients();
  }
});
