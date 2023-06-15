const handleFileChange = (e,setFormdata) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = JSON.parse(event.target.result);
      setFormdata(data);
    };
    reader.readAsText(file);
  };

  export default handleFileChange;