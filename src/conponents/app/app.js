import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PosStatusfilter  from '../post-status';
import PostList  from '../post-list';
import PostAddForm  from '../post-add-form';
import ModalWindow  from '../modal-window';
import FetchData  from '../../fetch-data';
import Loading  from '../loading';
// import Error from '../loading';
import {Route} from 'react-router-dom';



import './app.css';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
             data: [],
            searchValue: "",
            filter: "all",
            modalVisible: false,
            modal: [],
            Loading: true,
            Error: false

            // {label: "Статья  номер 1", important: true, like:false, id:1},
            // {label: "Статья  номер 2", important: false, like:false, id:2},
            // {label: "Статья  номер 3", important: false, like:false, id:3},
            // {label: "Статья  номер 3", important: false, like:false, id:4},  

        }
        // this.getAlldata();
        this.onDelete = this.onDelete.bind(this);
        this.addItems = this.addItems.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearchPanel = this.onUpdateSearchPanel.bind(this);
        this.onUpdateFilter = this.onUpdateFilter.bind(this);
 
        this.onOpenWindow = this.onOpenWindow.bind(this);
       

  
        this.id = 4;
    }

    onDelete(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index +1);

            const newData = [...before, ...after];

            return {
                data: newData
            }
     

            // data.splice(index, 1);
            // return{
            //     data: data
            // }


        });
         
    }

    addItems(text){
        const newItem = {
            label:text,
            important: false,
            id:this.id++

        }
        // console.log(this.id);

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
            
    }


onToggleImportant(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);

        const before = data[index];
        const newLike = {...before, important: !before.like};

        const newData = [...data.slice(0, index), newLike, ...data.slice(index +1)];

        return {
            data: newData
        }
        

    });
}


onToggleLike(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);

        const before = data[index];
        const newLike = {...before, like: !before.like};

        const newData = [...data.slice(0, index), newLike, ...data.slice(index +1)];

        return {
            data: newData
        }
        

    });
}

serachPost(items, searchValue){
    if(searchValue.length === 0){
        return items
    }

    return items.filter((item) => {
        return item.label.indexOf(searchValue) > -1

    });

}

onUpdateSearchPanel(value){
    this.setState({
        searchValue: value
      })
}

filterPost(items, filter){
    if (filter === "like"){
        return items.filter(item => item.like)
    } else {
        return items
    }
}


onUpdateFilter(value){
    this.setState({
        filter: value
      })
}


//  fetch-data
getdata = new FetchData();

modalData = (data) => {
    this.setState ({
        modal: data.data
    })
    .catch(this.onError);
}

onOpenWindow = async (id) => {
    this.setState({
        modalVisible: !this.state.modalVisible,
       
      })

      this.getdata.getPostById(id)
 
      .then(singledata => {
       this.modalData(singledata);
      })

   .catch(this.onError);
}


onOpenFullWindow = (id) => {
    this.setState({
        modalVisible: !this.state.modalVisible,
       
      })

      this.getdata.getPostByIdFull(id)
 
      .then(singledata => {
       this.modalData(singledata);
      })

   
}


onCloseWindow = () => {
    this.setState({
        modalVisible: !this.state.modalVisible,
        // modal: []
      })
    this.proms.params.goBack()
}

componentDidMount(){
    this.getdata.getAllpost()
 
    .then(alldata => {
        console.log(alldata.data);
        this.setState ({
            data: alldata.data,
            loading: false
        })
    
       
    });
}


//getAlldata
   


   render() {

const {data, searchValue, filter, modalVisible, modal, loading} = this.state;

// console.log(modalVisible);

const likes = data.filter(item =>item.like).length;
const searchPost = this.filterPost(this.serachPost(data, searchValue), filter);
const allItems = searchPost.length;

const spinner = loading ? <Loading/>: null;
//const content = !(error || loading) ? { <PostList }



// posts={searchPost}
// onDelete={this.onDelete}
// onToggleImportant={this.onToggleImportant}
// onToggleLike={this.onToggleLike}
// onOpenWindow={this.onOpenWindow}
// onOpenFullWindow={this.onOpenFullWindow}


// />

// let spinner;
// if(loading) {
//     spinner = <Loading/>
// } else{
//     spinner = null
// }


    return (


         
        <div className='blockPanel'>
          
       
       
           <AppHeader 
           allPost={allItems}
           likes={likes}
           />
           <div className='search-panel d-flex'>
           <SearchPanel
           onUpdateSearchPanel={this.onUpdateSearchPanel}
           />
          
        

           <PosStatusfilter
           filter={filter}
           onUpdateFilter={this.onUpdateFilter}
           />
           </div>
           {spinner}
           {/* <Loading/> */}
           < PostList

             posts={searchPost}
             onDelete={this.onDelete}
             onToggleImportant={this.onToggleImportant}
             onToggleLike={this.onToggleLike}
             onOpenWindow={this.onOpenWindow}
             onOpenFullWindow={this.onOpenFullWindow}
       
             />
        
        
        <PostAddForm
        addItems={this.addItems}
        />
        <ModalWindow
        modalVisible={modalVisible}
        onCloseWindow={this.onCloseWindow}
        modalContent={modal}

        />
        </div>

        )
        }


        }
      
