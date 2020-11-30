import React, { Component } from 'react';
import apiControllers from '../controllers/index';
import { Link} from 'react-router-dom';

// use the merterail ui 
import { Button, TextField, Card, Container} from '@material-ui/core';

export default class editHome extends Component{
    constructor(props){
        super(props);
        this.state = {
           title: '',
           des: ''
        }
    }
    
    handleChange = event =>{
        this.setState({[event.target.name]:event.target.value});
    }
    saveUpdate = event =>{
        try{

            event.preventDefault();
            if(this.state.title && this.state.des){
                apiControllers.editData(this.props.match.params.id, this.state) ;
                this.setState({titleclear: '', desclear: ''})  ;
                alert('update succeed');
            }else{
                alert(`Oops title or description not obey the rule....!`)
            }

        }catch(err){
            console.log(err);
        }
    }
    render(){
        return (
            <Container maxWidth="sm">
                <br></br><br></br><br></br><br></br>
                <Card style={{alignContent: "center", }}>
                    <form onSubmit={this.saveUpdate} autoComplete ="off">
                        <TextField  label="Edit Title" name="title" type="text" value={this.state.titleclear} onChange={this.handleChange}/>
                        <br></br>
                        <TextField  label="Edit Des" name="des" type="text" value={this.state.desclear} onChange={this.handleChange}/>
                        <br></br><br></br>
                        <Link to={""}><Button variant="outlined" color="primary">Back</Button></Link> 
                        <span> </span>
                        <Button type="submit" color="secondary" variant="outlined">Update</Button>
                    </form>
                    <br></br> <br></br>
                </Card>
            </Container>
        )
    }
}