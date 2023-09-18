import React from 'react'

function Alarts(props) {
  const captilize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+word.slice(1);
  }
  return (
  props.alert &&  <div className={`alert alert-${props.alert.typ} alert-dismissible fade show` }role="alert">
  <strong>{captilize(props.alert.typ)}</strong>:{props.alert.msg}
</div>
  )
}

export default Alarts
