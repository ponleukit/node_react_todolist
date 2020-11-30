import axios from 'axios';

class apiControllers {
    static async getData(){
       return  await axios.get('http://localhost:5000/blog/');
    }
    static async postData(blogs){
        return await axios.post('http://localhost:5000/blog/', blogs)
        .catch(err =>{
            console.log(err);
        })
    }
    static async editData(id, blog){
        return await axios.put('http://localhost:5000/blog/' +  id, blog)
        .then(res=>{
            console.log(res.status(200));
        })    
        .catch(err=>{
            console.log(err)
        })    
    }
    static async deleteData(id){
        return await axios.delete('http://localhost:5000/blog/' + id)
    }
}

export default apiControllers;