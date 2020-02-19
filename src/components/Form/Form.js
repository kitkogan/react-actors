import React, {Component} from 'react';

class Form extends Component {
    state = {
        inputObject: {
            firstName: '',
            lastName: '',
            bestImpression: ''
        },
        finalObject:{
            firstName: '',
            lastName: '',
            bestImpression: ''
          
        },
        displayCopy: ''
      };
    
      handleChange = (event, typeOf) => {
        console.log(event.target.value, typeOf);
        this.setState({
            [typeOf]: event.target.value
        })
      }

      handleClick = () => {
          console.log(this.state.firstName);
          if(this.state.firstName === undefined || this.state.lastName === undefined || this.state.bestImpression === undefined){
            this.setState({
                displayCopy: 'Please fill all form fields'
            })  
            
          } else {
          this.setState({
             finalObject: {
                 firstName: this.state.firstName,
                 lastName: this.state.lastName,
                 bestImpression: this.state.bestImpression
        
             },
             displayCopy: "'s best impression is "
          })
        } 
      }


    render(){
        return(
            <div className="Form">
                
                    <label htmlFor="firstNameInput">First Name:</label>
                    <input id="firstNameInput" placeholder="First Name" onChange={(event) => this.handleChange(event, 'firstName')}/>
                    <label htmlFor="lastNameInput">Last Name:</label>
                    <input id="lastNameInput" placeholder="Last Name" onChange={(event) => this.handleChange(event, 'lastName')}/>
                    <label htmlFor="bestImpressionInput">Best Impression:</label>
                    <input id="bestImpressionInput" placeholder="Best Impression" onChange={(event) => this.handleChange(event, 'bestImpression')}/>
                    <button onClick={this.handleClick}>Join us!</button> 
                

                <h2>{this.state.finalObject.firstName} {this.state.finalObject.lastName}{this.state.displayCopy} {this.state.finalObject.bestImpression} </h2>
            </div>

        );
    }
    
};
export default Form;