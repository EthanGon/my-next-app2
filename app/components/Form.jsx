import { useState } from "react";

function Form(props) {
    const [name, setName] = useState("");
    const [URL, setURL] = useState("");

    function handleClick() {
        props.submitLink({name, URL});
    }

    function handleNameInputChange() {
        setName(event.target.value);
    }

    function handleURLInputChange() {
        setURL(event.target.value)
    }

    return (
        <div>
            <form>
                <label> Name </label>
                <input type="text" onChange={handleNameInputChange} />

                <label> URL </label>
                <input type="text" onChange={handleURLInputChange} />

                <button onClick={handleClick} type="button"> Add Link</button>

            </form>

        </div>
    )
}

export default Form