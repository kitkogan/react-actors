import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        bestImpression: ''
      };
    }

    render(){
        return(
            <div className="Form">
                <form>
                    <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={evt => this.updateInputValue(evt)}/>
                    <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={evt => this.updateInputValue2(evt)}/>
                    <input type="text" placeholder="Best Impression" name="bestImpression" value={this.state.bestImpression} onChange={evt => this.updateInputValue3(evt)}/>
                    <input type="button" value="Alert the text input" onClick={this.handleClick} /> 
                </form>
            </div>

        );
    }

    updateInputValue(evt){
        this.setState({
            firstName: evt.target.value
          
        });
    }

    updateInputValue2(evt){
        this.setState({
            lastName: evt.target.value
        });
        
    }

    updateInputValue3(evt){
        this.setState({
            bestImpression: evt.target.value
        });
    }

    
};
export default Form;