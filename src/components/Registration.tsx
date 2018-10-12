import * as React from 'react';
import { TextField, Button } from '@material-ui/core' 

export default class Registration extends React.Component <any, any>{
    constructor(props: any){
        super(props);
        this.state = {};
    }
    
    public handleSubmit(){
        console.log('handled')
    }
    public handleChange(){
        console.log("change handled ")
    }

    public render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <TextField
                    id="standard-name"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                />      
                    <Button 
                    type="submit" 
                    variant="raised"
                    color="primary"
                    />
                </form>
            </div>
        );
    }
}

