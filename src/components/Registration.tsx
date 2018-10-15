import * as React from 'react';
import Select from 'react-select';
import { TextField, Button } from '@material-ui/core' 

export default class Registration extends React.Component <any, any>{
    protected readonly NBA_TEAMS = [
        'Atlanta Hawks', 
        'Boston Celtics', 
        'Brooklyn Nets',
        'Charlotte Bobcats', 
        'Chicago Bulls', 
        'Cleveland Cavaliers', 
        'Dallas Mavericks', 
        'Denver Nuggets', 
        'Detroit Pistons', 
        'Golden State Warriors', 
        'Houston Rockets', 
        'Indiana Pacers',
        'Los Angeles Clippers',
        'Los Angeles Lakers', 
        'Memphis Grizzlies', 
        'Miami Heat', 
        'Milwaukee Bucks', 
        'Minnesota Timberwolves', 
        'New Orleans Hornets', 
        'New York Knicks', 
        'Oklahoma City Thunder', 
        'Orlando Magic', 
        'Philadelphia Sixers', 
        'Phoenix Suns', 
        'Portland Trail Blazers', 
        'Sacramento Kings', 
        'San Antonio Spurs', 
        'Toronto Raptors', 
        'Utah Jazz', 
        'Washington Wizards'
    ].map(name => ({
        value: name,
        label: name
    }))
    
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
                        id="Username"
                        label="Username"
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                    />    
                    <TextField
                        id="Password"
                        label="Password"
                        type="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        margin="normal"
                    />  
                    <TextField
                        id="Confirm Password"
                        label="Confirm Password"
                        type="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        margin="normal"
                    />  

                    <Select
                        options={this.NBA_TEAMS}
                        value={this.state.favTeam}
                        onChange={this.handleChange}
                        placeholder="Your Favorite Team"
                    />
                    <Button 
                    type="submit" 
                    variant="raised"
                    color="primary"
                    >
                    Complete Registration
                    </Button>
                </form>
            </div>
        );
    }
}

