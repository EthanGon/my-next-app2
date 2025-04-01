function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.URL}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Table