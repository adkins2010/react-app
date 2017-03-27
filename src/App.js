import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const cityObj = {
    seattle: {
        teamName: "Seahawks",
        link: "http://www.seahawks.com/"
    }
    ,
    baltimore: {
        teamName: "Ravens",
        link: "http://www.baltimoreravens.com/"
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {message: "Go ahead, type in a city."};
        this.updateMsgSpan = this.updateMsgSpan.bind(this)
    }

    ////{this.state.message} {this.state.name}!

    updateMsgSpan() {
        let msg = this.refs.cityName.value + "?  Never heard of it.";
        let text = this.refs.cityName.value.toLowerCase();
        if (cityObj[text]) {
            msg = `Go ${cityObj[text].teamName}!`;
            this.refs.cityImage.src = `${text}_icon.jpg`;
            this.refs.msgSpan.href= cityObj[text].link;

        } else {
            this.refs.cityImage.src = '';
            this.refs.msgSpan.removeAttribute("href");

        }
        this.setState({message: msg});
    }

    render() {
        return (
            <div>
                <h3>What's your favorite city?</h3>

                <input ref="cityName" type="text" placeholder="" onKeyUp={this.updateMsgSpan}/><br/>
                <a ref="msgSpan" >
                    {this.state.message}
                </a> <br/>
                <img ref="cityImage" src=""/>
            </div>
        );
    }
}

export default App;
