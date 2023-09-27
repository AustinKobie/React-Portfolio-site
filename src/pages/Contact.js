import "./Contact.css"
export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Phone Number"></input>
                <input placeholder="Message"></input>
                <input type="button" value="Submit" ></input>
            </form>
        </div>
    )
}