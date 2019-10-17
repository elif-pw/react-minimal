import React from 'react'
import AppTitle from "./AppTitle";

const generateArray = (start, stop) => Array.from({ length: (stop+1 - start)}, ( _,i) => start + (i ));

const generateRandomArray = (n) => [...Array.from({length: n}, () => Math.ceil(Math.random() * 25))]

function squareroot(arr) {
    return arr.map(function (x) {
        return Math.sqrt(x);
    });
}


const data = [
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

class StudentList extends React.Component {
    render() {
        const {children} = this.props;

        if (!children || children.length < 1) {
            return <p>No student</p>
        }
        return (<div>{children}</div>)
    }
}

const StudentDisplay = ({student}) => <p>{student.name} - {student.age}</p>;


const getStudents = (alphabete) => {
    var list = [];
    for (var i = 0; i < data.length; i++)
        data[i].students.map(x => list.push(x));
    if (alphabete == true)
        return list.sort((a, b) => (a.name > b.name) ? 1 : -1);
    else
        return list;
}

const filterStudents = () => {
    var list = [];
    var newdata = data.filter(teacher => teacher.active == true);
    for (var i = 0; i < newdata.length; i++) {
        newdata[i].students.map(x => (x.age > 20) ? list.push(x) : {});
    }
    return list;
}

class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {
            Filtered: [],
            a: '',
            b: '',
            iter: 0
        };
        this.onChangeA = this.onChangeA.bind(this);
        this.onChangeB = this.onChangeB.bind(this)

    }

    onChangeA(e) {
        this.setState({a: e.target.value}, (nextState) =>
            console.log("the value of a = " + this.state.a));

    }

    onChangeB(e) {
        this.setState({b: e.target.value}, (nextState) =>
            console.log("the value of b = " + this.state.b));

    }


    notSortedList = () => {
        this.setState({
            Filtered: <StudentList>
                <p>{getStudents(false).map(student => <StudentDisplay student={student}/>)}</p>;
            </StudentList>
        });
    }

    SortedList = () => {
        this.setState({
            Filtered: <StudentList>
                <p>{getStudents(true).map(student => <StudentDisplay student={student}/>)}</p>;
            </StudentList>
        });
    }

    FilteredList = () => {
        this.setState({
            Filtered: <StudentList>
                <p>{filterStudents().map(student => <StudentDisplay student={student}/>)}</p>;
            </StudentList>
        });
    }


    render() {
        return (

            <div>
                <span style={{ visibility : 'hidden'}} > {this.state.iter = this.state.iter + 1}</span>
                {console.time("Render - " + this.state.iter)}
                <h1>LAB 2</h1>

                <button onClick={this.notSortedList}>All Students</button>
                <br/><br/>
                <button onClick={this.SortedList}>Sort students</button>
                <br/><br/>
                <button onClick={this.FilteredList}>Old students</button>
                {this.state.Filtered}
                <br/><br/>

                <input a={this.state.a} type="number" onChange={this.onChangeA}/>

                <br/><br/>
                <input b={this.state.b} type="number" onChange={this.onChangeB}/>
                <br/><br/>

                {(this.state.a < this.state.b && this.state.a > 0) &&
                <b>{generateArray(parseInt(this.state.a, 10), parseInt(this.state.b, 10)).map(x => ' ' + x + ' ')}</b>}
                {console.timeEnd("Render - " + this.state.iter)}
            </div>
        )
    }
}

export default MyApp