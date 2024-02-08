document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("javascript");

        // const name = document.getElementById("name");
        const files = document.getElementById("files");
        const formData = new FormData();

        // formData.append("name", name.value);
        for (let i = 0; i < files.files.length; i++) {
            formData.append("files", files.files[i]);
        }
        console.log(...formData);
        fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => console.log(data));
    });

})



  const submit = document.getElementById('submit');

  submit.addEventListener('submit', async (event) => {
    event.preventDefault();
    const startdate = document.getElementById('startdate').value;
    console.log(startdate);
   
  }
  )
