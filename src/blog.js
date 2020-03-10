

function Animals(props){
    const animals = props.animals 
    const listAnimals = animals.map((animal, index) => 
        <li key={animal.sound}>
            {animal}
        </li>
    
    );
    return (
        <ul>{listAnimals}</ul>
    );
}

const animals = [
    { name: "cat",
      sound: "meow"
    }, 
    { name: "dog",
      sound: "bark"
    },
    { name: "cow",
      sound: "moo"
    }
]

ReactDOM.render(
    <Animals animals={animals} />, 
    document.getElementById('root')
);


// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li key={number.toString()}>
//         {number}
//       </li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );
  


<ul>
  <li>1</li> // key=1
  <li>2</li> // key=2
  <li>3</li> // key=3
  <li>4</li> // key=4
  <li>5</li> // key=5
</ul>

<ul>
  <li>1</li>  // key=1 --> same as above, keep it
  <li>2</li>  // key=2 --> same as above, keep it
  <li>6</li>  // key=3 --> ??? It expected an li with a key of 3 to match the number 3
  <li>3</li>  //key=4 --> thinks its new, remake li
  <li>4</li>  //key=5 --> thinks its new, remake li
  <li>5</li>  //key=6 --> thinks its new, remake li
</ul>

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (

        <ul>{listItems}</ul>
    );
    }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
        <NumberList numbers={numbers} />,
        document.getElementById('root')
  );
  

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <li key={index}>
            {number}
        </li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
        <NumberList numbers={numbers} />,
        document.getElementById('root')
  );
  
  const newNumbers = [1, 2, 6, 3, 4, 5]


  function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number, index) =>
          <ListItem key={index}
                    value={number} />
  
        )}
      </ul>
    );
  }