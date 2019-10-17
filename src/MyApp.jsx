import React from 'react'
import AppTitle from "./AppTitle";

const generateArray = (n) => [...Array(n).keys()].map(x => ++x)
const generateRandomArray = (n) => [...Array.from({length: n}, () => Math.ceil(Math.random() * 25))]
const theArray=[2, 56, 23, 88, 17, 4]
const theOtherArray=[2, 5, 8, 10]

function squareroot (arr) {
    return arr.map(function (x) {
        return Math.sqrt(x);
  });
}


const data=[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]

class StudentList extends React.Component{
    render(){
        const{ children }=this.props;

        if (!children || children.length<1){
            return <p>No student</p>
        }
        return (<div>{children}</div>)
    }
}

const StudentDisplay=({student})=> <p>{student.name} - {student.age}</p>;


const getStudents=(alphabete)=>{
    var list=[];
    for (var i=0; i<data.length; i++)
            data[i].students.map(x=>list.push(x));
    if (alphabete==true)
        return list.sort((a,b)=>(a.name>b.name)?1:-1);
    else
        return list;
}

const filterStudents=()=>{
    var list=[];
    var newdata=data.filter(teacher=>teacher.active==true);
    for (var i=0; i<newdata.length; i++) {
            newdata[i].students.map(x => (x.age>20)?list.push(x):{});
    }
    return list;
}

class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {
            Filtered:[],
        }
    }

    notSortedList=()=>{
        this.setState({
            Filtered:  <StudentList>
                <p>{getStudents(false).map(student=><StudentDisplay student={student}/>)}</p>;
            </StudentList>
        });
    }

    SortedList=()=>{
        this.setState({
            Filtered:  <StudentList>
                <p>{getStudents(true).map(student=><StudentDisplay student={student}/>)}</p>;
            </StudentList>
        });
    }

    FilteredList=()=>{
          this.setState({
            Filtered:  <StudentList>
                <p>{filterStudents().map(student=><StudentDisplay student={student}/>)}</p>;
            </StudentList>
        });
    }


    render() {
        return(
        <div>
            <h1>Minimal React ozdemire</h1>
            <p>Bundle size: 181 bytes, <br/> Load time of the bundle: 21 ms,
                <br/> Last commit SHA1: bc6178f3dacf5977dbefcce409dd3d3c67debe76 </p>

            <AppTitle/>

            <p>{generateArray(20).map(x => ' ' + x)}</p>
            <p>{generateRandomArray(10).map(x => ' ' + x)}</p>
            <p>{theArray.filter(x => x > 15).map(x => ' ' + x)}</p>
            <p>{squareroot(theOtherArray).map(x => ' ' + x)}</p>


            <button onClick={this.notSortedList}>All Students</button>
                <br/><br/>
                <button onClick={this.SortedList}>Sort students</button>
                <br/><br/>
                <button onClick={this.FilteredList}>Old students</button>
                {this.state.Filtered}
        </div>
        )
    }
}


export default MyApp