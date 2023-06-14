const handleSubmit = (formData) => {
    // e.preventDefault();
    const jsonData = JSON.stringify(formData);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.download = "form-data.json";
    link.click();
  };

  export default handleSubmit;