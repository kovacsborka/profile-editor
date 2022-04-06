const HTMLContent = `
    <h1>Profile settings</h1>
    <form action="" id="form">
        <div class="basicinfo">
            <input type="text" id="first-name" name="first-name" placeholder="First name">
            
            <input type="text" id="last-name" placeholder="Last name" >
            
            <input type="text" id="zip" placeholder="ZIP code">
            
            <input type="text" id="country" placeholder="Country">
            
            <input type="text" id="city" placeholder="City">
            
            <input type="text" id="house-number" placeholder="House number">
        </div>
        <div class="img-textarea">

            <input type="file" class="imginput">
            <img src="" alt="" id="profilepic">
            
            <textarea id="intro" cols="30" rows="10"></textarea>
            <button type="submit" id="btn1">Save</button>
            <button>Delete</button>
        </div>
        

    </form>
`


const loadEvent = () => {

    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", HTMLContent)

    const formElement = document.getElementById("form")


    let userData = []

    formElement.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log(e.target);


        userData.push(e.target.value)

        console.log(userData);

    })

}

window.addEventListener("load", loadEvent)