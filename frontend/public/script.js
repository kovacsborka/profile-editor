const HTMLContent = `
    <h1>Profile settings</h1>
    <form action="" id="form">
        <div class="basicinfo">
            <input type="text" id="first-name" name="first-name" placeholder="First name">
            
            <input type="text" id="last-name" name="last-name" placeholder="Last name" >
            
            <input type="text" id="zip" name="zip" placeholder="ZIP code">
            
            <input type="text" id="country" name="country" placeholder="Country">
            
            <input type="text" id="city" name="city" placeholder="City">
            
            <input type="text" id="house-number" name="house-number" placeholder="House number">
        </div>
        <div class="img-textarea">

            <input type="file" class="imginput" name="picture">
            <img src="" alt="" id="profilepic">
            
            <textarea id="intro" cols="30" rows="10"></textarea>
            <button type="submit" id="btn1">Save</button>
            <button>Delete</button>
        </div>
        

    </form>
`



function loadEvent() {
    const root = document.getElementById("root")

    root.insertAdjacentHTML("beforeend", HTMLContent)

    const formElement = document.getElementById("form");
    formElement.addEventListener("submit", e => {
        e.preventDefault();
       /*  console.dir(e); */

        const formData = new FormData() 
        formData.append("firt-name", e.target.querySelector(`input[name="first-name"]`).value) 
        formData.append("last-name", e.target.querySelector(`input[name="last-name"]`).value) 
        formData.append("zip", e.target.querySelector(`input[name="zip"]`).value) 
        formData.append("country", e.target.querySelector(`input[name="country"]`).value) 
        formData.append("city", e.target.querySelector(`input[name="city"]`).value) 
        formData.append("house-number", e.target.querySelector(`input[name="house-number"]`).value) 
        formData.append("picture", e.target.querySelector(`input[name="picture"]`).files[0]) 
        


        console.log(formData);

        
        const fetchSettings = {
            method: "POST",
            body: formData
        }

        fetch("/", fetchSettings) 
            .then(async data => {
                if (data.status === 200) {
                    const res = await data.json()
                    // e.target.outerHTML = `<img src="upload/${res.pictureName}">`
                    // console.dir(data);
                }
            })
            .catch(error => {
                e.target.outerHTML = "error";
                console.dir(error)
            })

            
    })
}

window.addEventListener("load", loadEvent)