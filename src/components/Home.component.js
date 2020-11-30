import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiControllers from '../controllers/index';

//import materail 
import {Container, Table, TableBody, TableCell, 
        TableContainer, TableHead, TableRow, Paper, 
        Button, TextField, Card} from '@material-ui/core/';
const Blog = props => (
    <TableRow>
      <TableCell>{props.blog.title}</TableCell>
      <TableCell>{props.blog.des}</TableCell>
      <TableCell>{props.blog.date.substring(0,10)}</TableCell>
      <TableCell>
        <Link to={"blog/edit/"+props.blog._id}><Button variant="text" color="primary">edit</Button></Link> | <Button variant="text" color="secondary"> <a onClick={() => { props.deleteBlog(props.blog._id) }}>delete</a></Button>
      </TableCell>
    </TableRow>
  )
  
  export default class blogList extends Component {
    constructor(props) {
      super(props);
  
      this.deleteBlog = this.deleteBlog.bind(this);  
      this.state = {blogs: []};
    }
  
    async componentDidMount() {
      apiControllers.getData()
        .then(response => {
          this.setState({ blogs: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    // Posting data path
    handleChange = event =>{
      this.setState({[event.target.name]:event.target.value});
    };
    postSubmit = event =>{
      event.preventDefault();

      apiControllers.postData(this.state);

      this.setState({title: '', des: ''})

    }

    // delete 
    deleteBlog(id) {
      apiControllers.deleteData(id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        blogs: this.state.blogs.filter(el => el._id !== id)
      })
    }
   
    // blogs list
    blogsList() {
      return this.state.blogs.map(currentblog => {
        return <Blog blog={currentblog} deleteBlog={this.deleteBlog} key={currentblog._id}/>;
      })
    }
    render() {
      return (
        <Container maxWidth="sm">
          <br></br><br></br>
          <Card style={{backgroundColor: "white"}}>
            <form onSubmit = { this.postSubmit} autoComplete="off" >
              <TextField  label="Blog's Title" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
              <br></br>
              <TextField label="Blog's Des"  name="des" type="text" value={this.state.des} onChange={this.handleChange} />
              <br></br><br></br>
              <Button type="submit" variant="outlined" color="primary">Post</Button>
            </form>
          </Card>
          <br></br>
          <div>
            <TableContainer component={Paper}>
              <Table  aria-label="simple table">
                <TableHead style = {{backgroundColor: "white"}}>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  { this.blogsList() }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Container>
      )
    }
  }