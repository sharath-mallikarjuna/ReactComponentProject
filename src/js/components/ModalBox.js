import React from 'react';
import PropTypes from 'prop-types';
import {Box,Button} from 'grommet';
import {Close} from 'grommet-icons';
// import '../../App'

const propTypes = {
    id: PropTypes.string.isRequired
};

class ModalBox extends React.Component {
    static modals = [];

    static open = (id) => (e) => {
        e.preventDefault();
        console.log(id+" openid");     
        let modal = ModalBox.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: true });
        document.body.classList.add('modal-open');
    }

    static close = (id) => (e) => {
        console.log(id+"welc"); 
        e.preventDefault();
        let modal = ModalBox.modals.find(x => x.props.id === id);
        modal.setState({ isOpen: false });
        document.body.classList.remove('modal-open'); 
            
        if(id=="success")
        modal.props.handlerIsLoggedIn();
        // console.log("closeNew"+modal.props.id);
    }

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.body.appendChild(this.element);
        ModalBox.modals.push(this);
    }

    componentWillUnmount() {
        ModalBox.modals = ModalBox.modals.filter(x => x.props.id !== this.props.id);
        this.element.remove();
    }

    handleClick(e) {
        console.log("samp "+this.props.id)
        if (e.target.className === 'modal') {
            ModalBox.close(this.props.id)(e);
        }
    }
    
    render() {
        return (
            <>
            <div style={{display: + this.state.isOpen ? '' : 'none'}} ref={el => this.element = el}>
              
                <div className="modal" ><div style={{'text-align':'right' , "backgroundColor":"#3e6e9e"}}> <Button icon={<Close />} onClick={ModalBox.close(this.props.id)} /></div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                </div>
                <div className="modal-background"></div>
            </div>
            </>
        );
    }
}

ModalBox.propTypes = propTypes;

export { ModalBox };