var e = React.createElement;

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { deleted: true };
    }

    render() {
        if (this.state.deleted) {
            //remove div delete-button-container
            //consolidate list
            //add another song to replace it
        }

        return e(
            'button',
            { onClick: () => this.setState({ deleted: true }) },
            'Delete'
        );
    }
}

//Find all delete-button-containers and add delete buttons to them
document.querySelectorAll('.delete-button-container')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        var commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
        e(DeleteButton, { commentID: commentID }),
        domContainer
    );
});