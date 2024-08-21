function backupdata() {
const keys = Object.keys(localStorage);
    let code = '';

    // Generate code to store each key-value pair in localStorage
    keys.forEach(key => {
        const value = localStorage.getItem(key);
        console.log(`the value of ${key} is ${value}`)
        code+= `localStorage.setItem('${key}', '${value}');\n `
    });
    console.log(code)

    var blob = new Blob([code], { type: "text/plain" });
            var link = document.createElement("a");

            link.href = URL.createObjectURL(blob);
            link.download = "textfile.txt";
            link.click();
            
            // Clean up the object URL
            URL.revokeObjectURL(link.href);

}