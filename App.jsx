import {useState} from 'react'
import {puppyList} from './data.js'
import './path-to-css.css'
import './App.css'

function App() {

const [puppies, setPuppies] = useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)
const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log(featuredPup)
console.log(setPuppies)

console.log("puppyList: ", puppyList);
console.log("puppy.id:" , puppy.id)

return (
  <div className="App">
      {
        puppies.map((puppy) => {
             return (
             <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
             );
           })}
           { featPupId && <p>{featPupId}</p>}
           </div>
)(
         <featPupId> 
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          </featPupId>
     
        )}

export default App
