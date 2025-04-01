function Form() {

    function handleClick() {
        alert("clicked");
    }


    return (
        <div>
            <form>
                <label> Name </label>
                <input type="text" />

                <label> URL </label>
                <input type="text" />

                <button onClick={handleClick}> Add Link</button>

            </form>

        </div>
    )
}

export default Form