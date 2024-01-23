import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons' 

function Card(props){
return (
  
<div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal text-center ">{props.data.planName}</h4>
            <h1 className="card-title pricing-card-title text-center">${props.data.price}/month</h1>
          </div>
          <div className="card-body">
            
            <ul className="list-unstyled mt-3 mb-4">
              {
                props.data.feature.map((feature)=> {
                  return feature.enable ? <li style={{ marginBottom: '10px' }} class="text-black-50" > <FontAwesomeIcon icon={faTimes} /> {feature.name}</li> : <li style={{ marginBottom: '10px' }}><FontAwesomeIcon icon={faCheck} /> {feature.name}</li>
                
                })
              }

            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary">BUTTON</button>
          </div>
        </div>
      </div>

  );
}

export default Card