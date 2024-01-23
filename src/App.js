import './App.css';
import Card from './card';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function App() {
  
  let priceCard = [
    {
      planName :"FREE",
      price : "0",
      feature : [
        {
          name : "Single user"
        },
          {name : "50GB storage"},
          {name : "Ultimated Public Projects"},
          {name : "Community Access"},
          {name : "Ultimated Private Projects",
        enable : true},
          {name : "Dediacted Phone Support",
          enable : true},
          {name: "Free Subdomain",
          enable : true},
          {name : "Monthly status Report",
          enable : true}
        
      ]
  },
  {
    planName :"PLUS",
    price : "9",
    feature : [
      {
        name : "5 users"
      },
        {name : "50GB storage"},
        {name : "Ultimated Public Projects"},
        {name : "Community Access"},
        {name : "Ultimated Private Projects"},
        {name : "Dediacted Phone Support"},
        {name: "Free Subdomain"},
        {name : "Monthly status Report",
        enable : true}
      
    ]
},
{
  planName :"PRO",
  price : "49",
  feature : [
    {
      name : "Ultimated users"
    },
      {name : "50GB storage"},
      {name : "Ultimated Public Projects"},
      {name : "Community Access"},
      {name : "Ultimated Private Projects"},
      {name : "Dediacted Phone Support"},
      {name: "Free Subdomain"},
      {name : "Monthly status Report"}
    
  ]
}

  ]

  return (
  <div className='container'>
    <br /> 
  <h1 className='text-center'>React Price Card Task</h1>
      <div  style = {{padding: '30px' }}className='row bg-primary' >
     {
      priceCard.map((card)=> {
        return <Card data = {card} />

      })
     }
     
    </div>
    
  </div>


    
  );
}

export default App;
